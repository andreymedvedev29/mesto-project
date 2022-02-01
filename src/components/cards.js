
import { imgPopupImg, titlePopupImg, popupImg, elements } from './data.js'
import { openPopup } from './modal.js'
import { userId } from './index.js'
import { sendLike, deleteLike, deleteCard } from './api.js'

export const renderCards = (arr) => {
  arr.reverse().forEach(item => {
    const cardTitle = item.name;
    const cardImage = item.link;
    const initialLikes = item.likes;
    const cardOwner = item.owner._id;
    const cardId = item._id;
    addCard(cardTitle, cardImage, initialLikes, cardOwner, cardId)
  });
}

export function createCard(cardTitle, cardImage, initialLikes, cardOwner, cardId) {
  const cardTemplate = document.querySelector('#place-template').content;//находим шаблон
  const cardElement = cardTemplate.querySelector('.elements__element').cloneNode(true);//клонируем шаблон
  const imageElement = cardElement.querySelector('.elements__image');
  const initialLikeHeart = cardElement.querySelector('.elements__group-icon');
  const likeCounterElement = cardElement.querySelector('.elements__group-likes');
  const closeButtonBasket = cardElement.querySelector('.elements__close-button');//находим кнопку корзинка
  cardElement.owner = cardOwner;
  cardElement.id = cardId;
  likeCounterElement.textContent = initialLikes.length;
  cardElement.querySelector('.elements__group-title').textContent = cardTitle;
  imageElement.src = cardImage;
  imageElement.alt = cardTitle;

  if (initialLikes) {
    initialLikes.forEach((user) => {
      if (user._id === userId) {
        initialLikeHeart.classList.add("elements__group-icon_activ");
      }
    });
  } else {
    likeCounterElement.textContent = 0;
  }
  cardElement.querySelector(".elements__group-icon").addEventListener("click", addLike);

  if (userId == cardOwner) {
    closeButtonBasket.classList.add('elements__close-button_opened');
  };

  cardElement.querySelector('.elements__close-button').addEventListener('click', deleting)

  imageElement.addEventListener('click', function () {//функция открытия попапа с картинкой
    imgPopupImg.src = cardImage;
    imgPopupImg.alt = cardTitle;
    titlePopupImg.textContent = cardTitle;

    openPopup(popupImg);
  });
  return cardElement;
};

export const addCard = (cardTitle, cardImage, initialLikes, cardOwner, cardId) => {
  const card = createCard(cardTitle, cardImage, initialLikes, cardOwner, cardId);
  elements.prepend(card);
}

const addLike = (evt) => {
  const likeHeart = evt.target;
  const likesContainer = likeHeart.closest(".elements__group-block");
  const currentCard = likeHeart.closest(".elements__element");
  const likeCount = likesContainer.querySelector(".elements__group-likes");
  const cardId = currentCard.id;

  if (!likeHeart.classList.contains("elements__group-icon_activ")) {
      sendLike(cardId)
          .then((res) => {
              likeCount.textContent = res.likes.length;
              likeHeart.classList.toggle("elements__group-icon_activ");
          })
          .catch((err) => {
              console.log(err);
          });
  } else {
      deleteLike(cardId)
          .then((res) => {
              likeCount.textContent = res.likes.length;
              likeHeart.classList.toggle("elements__group-icon_activ");
          })
          .catch((err) => {
              console.log(err);
          });
  }
};


let deletingItem;

function deleting(evt) {
const basket = evt.target; 
deletingItem = basket.closest(".elements__element");
const deletingItemId = deletingItem.id;
deleteCard(deletingItemId)
    .then(() => {
        deletingItem.remove();
    })
    .catch((err) => {
        console.log(err);
    })
}