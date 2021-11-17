let popup = document.querySelector('.popup');
let popupPlace = document.querySelector('.popup-place');
let popupImg = document.querySelector('.popup-img');
let profile = document.querySelector('.profile');

//функции открытия/закрытия попапов
function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
};
function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
};
//открываем/закрываем форму профиля
let editButton = profile.querySelector('.profile__edit-button');
let closeButton = popup.querySelector('.popup__close-button');
editButton.addEventListener('click', function () {
  openPopup(popup);
});
closeButton.addEventListener('click', function () {
  closePopup(popup);
});

//редактируем профиль, отправляем форму
let saveButton = popup.querySelector('.popup__button');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let popupContainer = popup.querySelector('.popup__container');
let nameInput = document.getElementById('name');
let jobInput = document.getElementById('prof');

function formSubmitHandler(evt) {
  evt.preventDefault(); 
  let nameValue = nameInput.value;
  let jobValue = jobInput.value;
  profileTitle.textContent = nameValue;
  profileSubtitle.textContent = jobValue;
}
popupContainer.addEventListener('submit', formSubmitHandler); 
saveButton.addEventListener('click', function () {
  closePopup(popup);
});

/*открываем/закрываем форму нового места*/
let addButton = profile.querySelector('.profile__add-button');
let closeButtonPlace = popupPlace.querySelector('.popup__close-button');
addButton.addEventListener('click', function () { 
  openPopup(popupPlace);
});
closeButtonPlace.addEventListener('click', function () {
  closePopup(popupPlace);
});

//начальный массив карточек
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

//форма добавления новой карточки
let popupContainerplace = popupPlace.querySelector('.popup__container-place');//находим форму
let saveButtonplace = document.querySelector('.popup-place__button');//находим кнопку сохранить
let placeInput = document.getElementById('namePlace');//находим поле ввода названия места
let linkInput = document.getElementById('linkPlace');// находим поле ввода ссылки
let closeButtonImg = popupImg.querySelector('.popup__close-button');

//функция создания новой карточки
function createCard(name, link) {
  const cardTemplate = document.querySelector('#place-template').content;
  const cardElement = cardTemplate.querySelector('.elements__element').cloneNode(true);

  const imageElement = cardElement.querySelector('.elements__image');
  imageElement.src = link;
  imageElement.alt = name;

  cardElement.querySelector('.elements__group-title').textContent = name;

  cardElement.querySelector('.elements__group-icon').addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__group-icon_activ');
});

  cardElement.querySelector('.elements__close-button').addEventListener('click', function () {
    cardElement.remove();
});
  imageElement.addEventListener('click', function () {

    document.querySelector('.popup-img__image').src = link;
    document.querySelector('.popup-img__image').alt = name;
    document.querySelector('.popup-img__title').textContent = name;
    
    openPopup(popupImg);
    closeButtonImg.addEventListener('click', function () {
      closePopup(popupImg);
    });
});
  return cardElement;
}

initialCards.forEach((item) => {
  elements.prepend(createCard(item.name, item.link))
}) 

function formSubmitHandler2(evt) {
  evt.preventDefault();
  let placeValue = placeInput.value;
  let linkValue = linkInput.value;
  let cardElement = createCard(placeValue, linkValue);
  elements.prepend(cardElement);
}
popupContainerplace.addEventListener('submit', formSubmitHandler2);
saveButtonplace.addEventListener('click', function () {
  closePopup(popupPlace);
});
