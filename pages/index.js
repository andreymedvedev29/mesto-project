const popupProfile = document.querySelector('.popup-profile');//находим попап профиля
const popupPlace = document.querySelector('.popup-place');//находим попап места
const popupImg = document.querySelector('.popup-img');//находим попап картинки
const profile = document.querySelector('.profile');//находим профиль

function openPopup(popupElement) {             //функции открытия попапов
  popupElement.classList.add('popup_opened');
};
function closePopup(popupElement) {            //функции закрытия попапов
  popupElement.classList.remove('popup_opened');
};

document.addEventListener('keydown', function (evt) {       //закрываем попапы клавишей Esc
  const escButton = document.querySelector('.popup_opened')
  if (evt.key === 'Escape') {
      closePopup(escButton)
  }
}); 

document.addEventListener('click', function (evt) {        //закрываем попапы кликом по оверлею
  if (evt.target.classList.contains('popup_opened')) {
    closePopup(evt.target)
  }
}); 


const editButton = profile.querySelector('.profile__edit-button');//находим кнопку редактирования профиля
const closeProfileButton = popupProfile.querySelector('.popup__close-button'); //находим кнопку закрытия попапа профиля
editButton.addEventListener('click', function () {                //на кнопку редактирования профиля вешаем функцию открытия попапа            
  openPopup(popupProfile);
});
closeProfileButton.addEventListener('click', function () {               //на кнопку закрытия профиля вешаем функцию закрытия попапа
  closePopup(popupProfile);
});


const saveButton = popupProfile.querySelector('.popup__button');//находим кнопку сохранения данных профиля
const profileTitle = profile.querySelector('.profile__title');//находим заголовок профиля
const profileSubtitle = profile.querySelector('.profile__subtitle');//находим подзаголовок профиля
const profileForm = popupProfile.querySelector('.popup__container');//находим форму профиля
const nameInput = document.getElementById('name-input');//находим поле ввода имени
const jobInput = document.getElementById('prof-input');//находим поле ввода профессии

function handleProfileFormSubmit(evt) {         //функция отправки формы
  evt.preventDefault(); 
  const nameValue = nameInput.value;//в переменную сохраняем данные поля ввода имени
  const jobValue = jobInput.value;//в переменную сохраняем данные поля ввода профессии
  profileTitle.textContent = nameValue;//добавляем имя на страницу
  profileSubtitle.textContent = jobValue;//добавляем профессию на страницу
  closePopup(popupProfile);
}
profileForm.addEventListener('submit', handleProfileFormSubmit);


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
const imgPopupImg = popupImg.querySelector('.popup-img__image');//находим картинку попапа картинки
const titlePopupImg = popupImg.querySelector('.popup-img__title');//находим название картинки попапа картинки

//форма добавления новой карточки
const addPlaceForm = popupPlace.querySelector('.popup__container');//находим форму
const saveButtonPlace = popupPlace.querySelector('.popup__button');//находим кнопку сохранить
const placeInput = document.getElementById('place-input');//находим поле ввода названия места
const linkInput = document.getElementById('email-input');// находим поле ввода ссылки
const closeButtonImg = popupImg.querySelector('.popup__close-button');//находим кнопку закрытия попапа картинки

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

    imgPopupImg.src = link;
    imgPopupImg.alt = name;
    titlePopupImg.textContent = name;
    
    openPopup(popupImg);
});

  return cardElement;
}

closeButtonImg.addEventListener('click', function () {
  closePopup(popupImg);
});

initialCards.forEach((item) => {//циклом перебираем начальный массив карточек и добавляем их на страницу
  elements.prepend(createCard(item.name, item.link))
}) 

function handlePlaceFormSubmit(evt) {   //функция отправки формы
  evt.preventDefault();
  const placeValue = placeInput.value;
  const linkValue = linkInput.value;
  const cardElement = createCard(placeValue, linkValue);
  elements.prepend(cardElement);
  closePopup(popupPlace);
}
addPlaceForm.addEventListener('submit', handlePlaceFormSubmit);



// Вынесем все необходимые элементы формы в константы
const form = document.querySelector('.popup__form');
const formInput = form.querySelector('.popup__item');
const formError = form.querySelector(`.${formInput.id}-error`); 

// Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('popup__item_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__item-error_activ');
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup__item_type_error');
  errorElement.classList.add('popup__item-error_activ');
  errorElement.textContent = '';
};

//Функция валидации полей
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

//Функция ищет хлтя бы одно невалидное поле
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};


//Функция переключения кнопки актив/неактив
const toggleButtonState = (inputList, buttonElement) => {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(inputList)) {
    // сделай кнопку неактивной
    buttonElement.classList.add('popup__button-activ');
  } else {
        // иначе сделай кнопку активной
    buttonElement.classList.remove('popup__button-activ');
  }
};


//Функция добавляет слушателя всем полям внутри формы
const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__item'));
  const buttonElement = formElement.querySelector('.popup__button');
  // чтобы проверить состояние кнопки в самом начале
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      // чтобы проверять его при изменении любого из полей
      toggleButtonState(inputList, buttonElement);
    });
  });
};

//Функция добавляет обработчик  всем формам
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement)
  });
};

enableValidation();



