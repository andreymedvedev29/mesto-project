
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
  const cardTemplate = document.querySelector('#place-template').content;
  const cardElement = cardTemplate.querySelector('.elements__element').cloneNode(true);
  const imageElement = cardElement.querySelector('.elements__image');
  const initialLikeHeart = cardElement.querySelector('.elements__group-icon');
  const likeCounterElement = cardElement.querySelector('.elements__group-likes');
  const deleteButtonBasket = cardElement.querySelector('.elements__close-button');
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
  //cardElement.querySelector(".elements__group-icon").addEventListener("click", addLike);
  initialLikeHeart.addEventListener("click", addLike);

  if (userId == cardOwner) {
    deleteButtonBasket.classList.add('elements__close-button_opened');
  };
  //cardElement.querySelector('.elements__close-button').addEventListener('click', deleting)
  deleteButtonBasket.addEventListener('click', deleting);

  imageElement.addEventListener('click', function () {
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
  const likesBlock = likeHeart.closest(".elements__group-block");
  const currentCard = likeHeart.closest(".elements__element");
  const likeCount = likesBlock.querySelector(".elements__group-likes");
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

let delItem;

function deleting(evt) {
const basket = evt.target; 
delItem = basket.closest(".elements__element");
const deletingItemId = delItem.id;
deleteCard(deletingItemId)
    .then(() => {
        delItem.remove();
    })
    .catch((err) => {
        console.log(err);
    })
}