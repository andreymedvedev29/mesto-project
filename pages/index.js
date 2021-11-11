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

/*открываем/закрываем форму нового места*/
let addButton = profile.querySelector('.profile__add-button');
addButton.addEventListener('click', function () {
  popupPlace.classList.add('popup_opened');
});
let closeButtonPlace = popupPlace.querySelector('.popup__close-button');
closeButtonPlace.addEventListener('click', function () {
  popupPlace.classList.remove('popup_opened');
});

/*добавляем карточки*/
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const elements = document.querySelector('.elements');
const cardTemplate = document.querySelector('#place-template').content;

initialCards.forEach(function (element) {
  const cardElement = cardTemplate.querySelector('.elements__element').cloneNode(true);

  cardElement.querySelector('.elements__image').src = element.link;
  cardElement.querySelector('.elements__group-title').textContent = element.name;

  elements.append(cardElement)
  })






  function addPlace(name, link) {
    const cardTemplate = document.querySelector('#place-template').content;
    const cardElement = cardTemplate.querySelector('.elements__element').cloneNode(true);
  
    const imageElement = cardElement.querySelector('.elements__image');
    imageElement.src = link;
    imageElement.alt = name;
  
    cardElement.querySelector('.elements__group-title').textContent = name;
    
    cardElement.querySelector('.elements__group-icon').addEventListener('click', function() {
      event.target.classList.toggle('elements__group-icon_activ');
    });
  
    return cardElement;
  }