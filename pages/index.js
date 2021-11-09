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

/*редактируем профиль, отправляем форму*/
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

/*добавляем карточки*/
const elements = document.querySelector('.elements');

let elementsElement = document.createElement('div');//создаем карточку
elementsElement.classList.add('elements__element');
let elementsImage = document.createElement('img');//создаем картинку
elementsImage.classList.add('elements__image');
elementsImage.src = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg';
let elementsGroup = document.createElement('div');//создаем группу название/кнопка
elementsGroup.classList.add('elements__group');
let elementsTitle = document.createElement('h4');//создаем название
elementsTitle.classList.add('elements__group-title');
elementsTitle.textContent = 'Архыз';
let elementsButton = document.createElement('button');//создаем кнопку
elementsButton.classList.add('elements__group-icon');
elementsGroup.append(elementsTitle, elementsButton);
elementsElement.append(elementsImage, elementsGroup);
elements.append(elementsElement);

elementsElement = document.createElement('div');
elementsElement.classList.add('elements__element');
elementsImage = document.createElement('img');
elementsImage.classList.add('elements__image');
elementsImage.src = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg';
elementsGroup = document.createElement('div');
elementsGroup.classList.add('elements__group');
elementsTitle = document.createElement('h4');
elementsTitle.classList.add('elements__group-title');
elementsTitle.textContent = 'Челябинская область';
elementsButton = document.createElement('button');
elementsButton.classList.add('elements__group-icon');
elementsGroup.append(elementsTitle, elementsButton);
elementsElement.append(elementsImage, elementsGroup);
elements.append(elementsElement);

elementsElement = document.createElement('div');
elementsElement.classList.add('elements__element');
elementsImage = document.createElement('img');
elementsImage.classList.add('elements__image');
elementsImage.src = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg';
elementsGroup = document.createElement('div');
elementsGroup.classList.add('elements__group');
elementsTitle = document.createElement('h4');
elementsTitle.classList.add('elements__group-title');
elementsTitle.textContent = 'Иваново';
elementsButton = document.createElement('button');
elementsButton.classList.add('elements__group-icon');
elementsGroup.append(elementsTitle, elementsButton);
elementsElement.append(elementsImage, elementsGroup);
elements.append(elementsElement);

elementsElement = document.createElement('div');
elementsElement.classList.add('elements__element');
elementsImage = document.createElement('img');
elementsImage.classList.add('elements__image');
elementsImage.src = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg';
elementsGroup = document.createElement('div');
elementsGroup.classList.add('elements__group');
elementsTitle = document.createElement('h4');
elementsTitle.classList.add('elements__group-title');
elementsTitle.textContent = 'Камчатка';
elementsButton = document.createElement('button');
elementsButton.classList.add('elements__group-icon');
elementsGroup.append(elementsTitle, elementsButton);
elementsElement.append(elementsImage, elementsGroup);
elements.append(elementsElement);

elementsElement = document.createElement('div');
elementsElement.classList.add('elements__element');
elementsImage = document.createElement('img');
elementsImage.classList.add('elements__image');
elementsImage.src = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg';
elementsGroup = document.createElement('div');
elementsGroup.classList.add('elements__group');
elementsTitle = document.createElement('h4');
elementsTitle.classList.add('elements__group-title');
elementsTitle.textContent = 'Холмогорский район';
elementsButton = document.createElement('button');
elementsButton.classList.add('elements__group-icon');
elementsGroup.append(elementsTitle, elementsButton);
elementsElement.append(elementsImage, elementsGroup);
elements.append(elementsElement);

elementsElement = document.createElement('div');
elementsElement.classList.add('elements__element');
elementsImage = document.createElement('img');
elementsImage.classList.add('elements__image');
elementsImage.src = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg';
elementsGroup = document.createElement('div');
elementsGroup.classList.add('elements__group');
elementsTitle = document.createElement('h4');
elementsTitle.classList.add('elements__group-title');
elementsTitle.textContent = 'Байкал';
elementsButton = document.createElement('button');
elementsButton.classList.add('elements__group-icon');
elementsGroup.append(elementsTitle, elementsButton);
elementsElement.append(elementsImage, elementsGroup);
elements.append(elementsElement);

/*открываем/закрываем форму нового места*/
let addButton = profile.querySelector('.profile__add-button');
addButton.addEventListener('click', function () {
  popupPlace.classList.add('popup_opened');
});
let closeButtonPlace = popupPlace.querySelector('.popup__close-button');
closeButtonPlace.addEventListener('click', function () {
  popupPlace.classList.remove('popup_opened');
});


function addPlace() {
  let placeTemplate = document.querySelector('#place-template').content; 
  elementsElement = placeTemplate.querySelector('.elements__element').cloneNode(true);
  elementsElement.querySelector('.elements__image').src = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg';
  elementsElement.querySelector('.elements__group');
  elementsElement.querySelector('.elements__group-icon');
  elementsElement.querySelector('.elements__group-title').textContent = 'Дюк Корморант';

  elements.append(elementsElement);
}
closeButtonPlace.addEventListener('click', addPlace) 

