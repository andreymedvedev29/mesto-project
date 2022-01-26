
editButton.addEventListener('click', function () {                //на кнопку редактирования профиля вешаем функцию открытия попапа            
  openPopup(popupProfile);
});
closeProfileButton.addEventListener('click', function () {               //на кнопку закрытия профиля вешаем функцию закрытия попапа
  closePopup(popupProfile);
});

function handleProfileFormSubmit(evt) {         //функция отправки формы
  evt.preventDefault(); 
  const nameValue = nameInput.value;//в переменную сохраняем данные поля ввода имени
  const jobValue = jobInput.value;//в переменную сохраняем данные поля ввода профессии
  profileTitle.textContent = nameValue;//добавляем имя на страницу
  profileSubtitle.textContent = jobValue;//добавляем профессию на страницу
  editProfile(nameValue, jobValue);
  closePopup(popupProfile);
}
profileForm.addEventListener('submit', handleProfileFormSubmit);

profileAvatar.addEventListener('click', function () {//функция открытия попапа с аватаром
  openPopup(popupAvatar);
});
closeButtonAvatar.addEventListener('click', function () {//на кнопку закрытия аватара вешаем функцию закрытия попапа
  closePopup(popupAvatar);
});

addButton.addEventListener('click', function () { //на кнопку открытия попапа место вешаем функцию открытия попапа
  document.getElementById('formPlace').reset();//очищаем форму
  openPopup(popupPlace);
});
closeButtonPlace.addEventListener('click', function () {//на кнопку закрытия попапа место вешаем функцию закрытия попапа
  closePopup(popupPlace);
});
closeButtonImg.addEventListener('click', function () {
  closePopup(popupImg);
});

function handlePlaceFormSubmit(evt) {   //функция отправки формы
  evt.preventDefault();
  const placeValue = placeInput.value;
  const linkValue = linkInput.value;
  const cardElement = createCard(placeValue, linkValue);
  elements.prepend(cardElement);
  closePopup(popupPlace);
}
addPlaceForm.addEventListener('submit', handlePlaceFormSubmit);


import '../index.css';

import { enableValidation } from './validate.js'
enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__item',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button-activ',
  inputErrorClass: 'popup__item-error',
  errorClass: 'popup__item_type_error'
}); 


import { popupProfile,
         popupPlace,
         popupImg, 
         popupAvatar,
         editButton, 
         closeProfileButton, 
         profileTitle, 
         profileSubtitle,
         profileForm, 
         nameInput, 
         jobInput, 
         addButton, 
         closeButtonPlace, 
         elements, 
         addPlaceForm, 
         placeInput, 
         linkInput, 
         closeButtonImg,
         profileAvatar,
         closeButtonAvatar
        } from './data.js'

import {  openPopup, closePopup } from './modal.js'


import { createCard } from './cards.js'
createCard();

import { userInfo } from './api.js'
userInfo();

import { getCards, editProfile } from './api.js'
getCards();





