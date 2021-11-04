let popup = document.querySelector('.popup');
let popupPlace = document.querySelector('.popup-place');
let profile = document.querySelector('.profile');

/*открываем/закрываем форму редактирования профиля*/
let editButton = profile.querySelector('.profile__edit-button');
editButton.addEventListener('click', function () {
  popup.classList.add('popup_opened');
});
let closeButton = popup.querySelector('.popup__close-button');
closeButton.addEventListener('click', function () {
  popup.classList.remove('popup_opened');
});

/*открываем/закрываем форму нового места*/
let addButton = profile.querySelector('.profile__add-button');
addButton.addEventListener('click', function () {
  popupPlace.classList.add('popup_opened');
});
let closeButtonPlace = popupPlace.querySelector('.popup__close-button');
closeButtonPlace.addEventListener('click', function () {
  popupPlace.classList.remove('popup_opened');
});
  



















