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

/*редактируем профилт, отправляем форму*/
let saveButton = popup.querySelector('.popup__button');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let popupContainer = popup.querySelector('.popup__container');
let nameInput = document.getElementById('name');
let jobInput = document.getElementById('prof');

function formSubmitHandler (evt) {
  evt.preventDefault(); 
  let nameValue = nameInput.value;
  let jobValue = jobInput.value;
  profileTitle.textContent = nameValue;
  profileSubtitle.textContent = jobValue;
}
popupContainer.addEventListener('submit', formSubmitHandler); 
saveButton.addEventListener('click', function () {
  popup.classList.remove('popup_opened');
});

















