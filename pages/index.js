let popup = document.querySelector('.popup');
let closeButton = popup.querySelector('.popup__close-button');
closeButton.addEventListener('click', function () {
    popup.classList.remove('popup_opened');
  }); 



let profile = document.querySelector('.profile');
let editButton = profile.querySelector('.profile__edit-button');
editButton.addEventListener('click', function () {
    popup.classList.add('popup_opened');
  }); 





