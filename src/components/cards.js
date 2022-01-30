
import { imgPopupImg, titlePopupImg, popupImg, elements } from './data.js'
import { openPopup } from './modal.js'
import { closeButtonBasket } from './data.js'

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
    const likeElement = cardElement.querySelector('.elements__group-icon');
    const likeCounterElement = cardElement.querySelector('.elements__group-likes');
    cardElement.owner = cardOwner;
    cardElement.id = cardId;
    likeCounterElement.textContent = initialLikes.length;
    cardElement.querySelector('.elements__group-title').textContent = cardTitle;
    imageElement.src = cardImage;
    imageElement.alt = cardTitle;
  
    cardElement.querySelector('.elements__group-icon').addEventListener('click', function (evt) {//функция добавляющая лайк
      evt.target.classList.toggle('elements__group-icon_activ');
  });
  
    cardElement.querySelector('.elements__close-button').addEventListener('click', function () {//функция удаляющая карточку
      cardElement.remove();
  });

  
/*if (cardOwner !== userId) {
  closeButtonBasket.classList.add('elements__close-button_opened');
};*/


  /*const likeElement = cardElement.querySelector('.elements__group-icon');
  const likeCounterElement = cardElement.querySelector('.elements__group-likes');
  likeCounterElement.textContent = likes.length.toString();
  const isLiked = Boolean(likes.find(user => user._id === currentUserId));
  if (isLiked) {
    likeElement.classList.add('elements__group-icon_activ');
  }


  const deleteElement = cardElement.querySelector('.elements__close-button');
  deleteElement.addEventListener('click', () => handleDeleteClick(cardElement, cardId));
    cardElement.remove();
  };
  const isOwner = ownerId === currentUserId;
  deleteElement.classList.add(isOwner ? 'card__delete_visible' : 'card__delete_hidden');*/




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