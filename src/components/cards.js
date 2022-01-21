import { imgPopupImg, titlePopupImg, popupImg } from './data.js'
import { openPopup } from './modal.js'

//функция создания новой карточки
export function createCard(name, link) {
    const cardTemplate = document.querySelector('#place-template').content;//находим шаблон
    const cardElement = cardTemplate.querySelector('.elements__element').cloneNode(true);//клонируем шаблон
  
    const imageElement = cardElement.querySelector('.elements__image');
    imageElement.src = link;
    imageElement.alt = name;
  
    cardElement.querySelector('.elements__group-title').textContent = name;
  
    cardElement.querySelector('.elements__group-icon').addEventListener('click', function (evt) {//функция добавляющая лайк
      evt.target.classList.toggle('elements__group-icon_activ');
  });
  
    cardElement.querySelector('.elements__close-button').addEventListener('click', function () {//функция удаляющая карточку
      cardElement.remove();
  });
    imageElement.addEventListener('click', function () {//функция открытия попапа с картинкой
  
      imgPopupImg.src = link;
      imgPopupImg.alt = name;
      titlePopupImg.textContent = name;
      
      openPopup(popupImg);
  });
  
    return cardElement;
  };