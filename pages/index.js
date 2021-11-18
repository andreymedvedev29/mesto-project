const popup = document.querySelector('.popup');//находим попап профиля
const popupPlace = document.querySelector('.popup-place');//находим попап места
const popupImg = document.querySelector('.popup-img');//находим попап картинки
const profile = document.querySelector('.profile');//находим профиль


function openPopup(popupElement) {             //функции открытия попапов
  popupElement.classList.add('popup_opened');
};
function closePopup(popupElement) {            //функции закрытия попапов
  popupElement.classList.remove('popup_opened');
};


const editButton = profile.querySelector('.profile__edit-button');//находим кнопку редактирования профиля
const closeButton = popup.querySelector('.popup__close-button'); //находим кнопку закрытия попапа профиля
editButton.addEventListener('click', function () {                //на кнопку редактирования профиля вешаем функцию открытия попапа            
  openPopup(popup);
});
closeButton.addEventListener('click', function () {               //на кнопку закрытия профиля вешаем функцию закрытия попапа
  closePopup(popup);
});


const saveButton = popup.querySelector('.popup__button');//находим кнопку сохранения данных профиля
let profileTitle = profile.querySelector('.profile__title');//находим заголовок профиля
let profileSubtitle = profile.querySelector('.profile__subtitle');//находим подзаголовок профиля
const popupContainer = popup.querySelector('.popup__container');//находим форму
let nameInput = document.getElementById('name');//находим поле ввода имени
let jobInput = document.getElementById('prof');//находим поле ввода профессии

function formSubmitHandlerProfile(evt) {         //функция отправки формы
  evt.preventDefault(); 
  let nameValue = nameInput.value;//в переменную сохраняем данные поля ввода имени
  let jobValue = jobInput.value;//в переменную сохраняем данные поля ввода профессии
  profileTitle.textContent = nameValue;//добавляем имя на страницу
  profileSubtitle.textContent = jobValue;//добавляем профессию на страницу
}
popupContainer.addEventListener('submit', formSubmitHandlerProfile); 
saveButton.addEventListener('click', function () { //на кнопку "сохранить" вешаем функцию закрытия попапа
    closePopup(popup);
});


const addButton = profile.querySelector('.profile__add-button');//находим кнопку открытия попапа место
const closeButtonPlace = popupPlace.querySelector('.popup__close-button');//находим кнопку закрытия попапа место
addButton.addEventListener('click', function () { //на кнопку открытия попапа место вешаем функцию открытия попапа
  document.getElementById('formPlace').reset();//очищаем форму
  openPopup(popupPlace);
});
closeButtonPlace.addEventListener('click', function () {//на кнопку закрытия попапа место вешаем функцию закрытия попапа
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

const elements = document.querySelector('.elements');//находим контейнер для карточек

//форма добавления новой карточки
const popupContainerplace = popupPlace.querySelector('.popup__container');//находим форму
const saveButtonPlace = popupPlace.querySelector('.popup__button');//находим кнопку сохранить
let placeInput = document.getElementById('namePlace');//находим поле ввода названия места
let linkInput = document.getElementById('linkPlace');// находим поле ввода ссылки
const closeButtonImg = popupImg.querySelector('.popup-img__close-button');//находим кнопку закрытия попапа картинки

//функция создания новой карточки
function createCard(name, link) {
  const cardTemplate = document.querySelector('#place-template').content;//находим шаблон
  const cardElement = cardTemplate.querySelector('.elements__element').cloneNode(true);//клонируем шаблон

  const imageElement = cardElement.querySelector('.elements__image');
  imageElement.src = link;
  imageElement.alt = name;

  cardElement.querySelector('.elements__group-title').textContent = name;

  cardElement.querySelector('.elements__group-icon').addEventListener('click', function (evt) {//функция добавляющая лайк
    evt.target.classList.toggle('elements__group-icon_activ');
});

  cardElement.querySelector('.elements__close-button').addEventListener('click', function () {//функция удаляющая карточку
    cardElement.remove();
});
  imageElement.addEventListener('click', function () {//функция открытия попапа с картинкой

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

initialCards.forEach((item) => {//циклом перебираем начальный массив карточек и добавляем их на страницу
  elements.prepend(createCard(item.name, item.link))
}) 

function formSubmitHandlerPlace(evt) {   //функция отправки формы
  evt.preventDefault();
  let placeValue = placeInput.value;
  let linkValue = linkInput.value;
  let cardElement = createCard(placeValue, linkValue);
  elements.prepend(cardElement);
}
popupContainerplace.addEventListener('submit', formSubmitHandlerPlace);
saveButtonPlace.addEventListener('click', function () {//на кнопку "сохранить" вешаем функцию закрытия попапа
  closePopup(popupPlace);
});
