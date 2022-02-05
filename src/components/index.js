import '../index.css';

import { enableValidation } from './validate.js'

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
         profileSubmitButton,
         saveButtonPlace,
         saveButtonAvatar
        } from './data.js'

import {  openPopup, closePopup } from './modal.js'

import { renderCards, addCard } from './cards.js'

import { editAvatar, editProfile, getAppInfo, sendCard } from './api.js'

import { renderLoading } from './utils.js'

import { settings } from './validate.js'

editButton.addEventListener('click', function () { 
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
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
  renderLoading(true, profileSubmitButton);
  editProfile(nameInput.value, jobInput.value)
    .then(() => {
      profileTitle.textContent = nameInput.value;
      profileSubtitle.textContent = jobInput.value;
      closePopup(popupProfile);   
    })
    .catch((err) => {
      console.log(err)
    }) 
    .finally(() => {
      renderLoading(false, profileSubmitButton);
    });
}
profileForm.addEventListener('submit', handleProfileFormSubmit);

function handleAvatarFormSubmit(evt) { 
  evt.preventDefault();
  renderLoading(true, saveButtonAvatar);
  editAvatar(avatarInput.value)
      .then(() => {
        profileAvatarImg.src = avatarInput.value;  
        disabledButton(saveButtonAvatar);
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
          disabledButton(saveButtonPlace);
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

  function disabledButton(button) {
    button.classList.add('popup__button-activ');
    button.setAttribute("disabled", true);
  }

  enableValidation(settings); 









