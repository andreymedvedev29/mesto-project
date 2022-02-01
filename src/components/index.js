editButton.addEventListener('click', function () {              
  openPopup(popupProfile);
});

closeProfileButton.addEventListener('click', function () {               
  closePopup(popupProfile);
});

profileAvatar.addEventListener('click', function () {
  openPopup(popupAvatar);
});

closeButtonAvatar.addEventListener('click', function () {
  closePopup(popupAvatar);
});

addButton.addEventListener('click', function () { 
  document.getElementById('formPlace').reset();
  openPopup(popupPlace);
});

closeButtonPlace.addEventListener('click', function () {
  closePopup(popupPlace);
});

closeButtonImg.addEventListener('click', function () {
  closePopup(popupImg);
});

function handleProfileFormSubmit(evt) {     
  evt.preventDefault(); 
  const nameValue = nameInput.value;
  const jobValue = jobInput.value;
  profileTitle.textContent = nameValue;
  profileSubtitle.textContent = jobValue;
  editProfile(nameValue, jobValue);
  saveButton.classList.add('popup__button-activ');
  evt.target.reset();
  closePopup(popupProfile);
}
profileForm.addEventListener('submit', handleProfileFormSubmit);

function handleAvatarFormSubmit(evt) { 
  evt.preventDefault();
  const avatarValue = avatarInput.value;
  profileAvatarImg.src = avatarValue;
  editAvatar(avatarValue);
  saveButtonAvatar.classList.add('popup__button-activ');
  evt.target.reset();
  closePopup(popupAvatar);
}
addAvatarForm.addEventListener('submit', handleAvatarFormSubmit);

function handlePlaceFormSubmit(evt) {  
  evt.preventDefault();
  const placeValue = placeInput.value;
  const linkValue = linkInput.value;
  sendCard(placeValue, linkValue, userId)
      .then((res) => {
          addCard(placeValue, linkValue, 0, userId, res._id);
          saveButtonPlace.classList.add('popup__button-activ');
          evt.target.reset();
          closePopup(popupPlace);
      })
}
addPlaceForm.addEventListener('submit', handlePlaceFormSubmit);

export let userId;

getAppInfo()
  .then(([user, cards]) => {
    profileTitle.textContent = user.name;
    profileSubtitle.textContent = user.about;
    profileAvatarImg.src = user.avatar;
    userId = user._id;
    renderCards(cards);
  })
  .catch(err => console.log(err));

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
         addPlaceForm, 
         placeInput, 
         linkInput, 
         closeButtonImg,
         profileAvatar,
         closeButtonAvatar,
         avatarInput,
         profileAvatarImg,
         addAvatarForm,
         saveButton,
         saveButtonPlace,
         saveButtonAvatar
        } from './data.js'

import {  openPopup, closePopup } from './modal.js'

import { renderCards, addCard } from './cards.js'

import { editAvatar, editProfile, getAppInfo, sendCard } from './api.js'







