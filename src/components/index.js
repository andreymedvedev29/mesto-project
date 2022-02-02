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
import { renderLoading } from './utils.js'

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
  renderLoading(true, saveButton);
  editProfile(nameInput.value, jobInput.value)
    .then(() => {
      profileTitle.textContent = nameInput.value;
      profileSubtitle.textContent = jobInput.value;
      saveButton.classList.add('popup__button-activ');
      evt.target.reset();
      closePopup(popupProfile);   
    })
    .catch((err) => {
      console.log(err)
    }) 
    .finally(() => {
      renderLoading(false, saveButton);
    });
}
profileForm.addEventListener('submit', handleProfileFormSubmit);

function handleAvatarFormSubmit(evt) { 
  evt.preventDefault();
  renderLoading(true, saveButtonAvatar);
  editAvatar(avatarInput.value)
      .then(() => {
        profileAvatarImg.src = avatarInput.value;  
        saveButtonAvatar.classList.add('popup__button-activ');
        evt.target.reset();
        closePopup(popupAvatar);
      })
      .catch((err) => {
        console.log(err)
      }) 
      .finally(() => {
        renderLoading(false, saveButtonAvatar);
      });
}
addAvatarForm.addEventListener('submit', handleAvatarFormSubmit);

function handlePlaceFormSubmit(evt) {  
  evt.preventDefault();
  renderLoading(true, saveButtonPlace);
  const placeValue = placeInput.value;
  const linkValue = linkInput.value;
  sendCard(placeValue, linkValue, userId)
      .then((res) => {
          addCard(placeValue, linkValue, 0, userId, res._id);
          saveButtonPlace.classList.add('popup__button-activ');
          evt.target.reset();
          closePopup(popupPlace);
      })
      .finally(() => {
        renderLoading(false, saveButtonPlace);
      });
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








