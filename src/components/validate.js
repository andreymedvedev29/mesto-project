
// Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(settings.popupError);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(settings.popupFieldSet);
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(settings.popupError);
  errorElement.classList.remove(settings.popupFieldSet);
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

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(settings.popupButtonDisabled);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(settings.popupButtonDisabled);
    buttonElement.disabled = false;
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(settings.popupInput));
  const buttonElement = formElement.querySelector(settings.popupButton);
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

export const enableValidation = (settings) => {
  const formList = Array.from(document.querySelectorAll(settings.popupForm));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement, settings)
  });
};

export const settings = {
  popupError: "popup__item_type_error",
  popupButtonDisabled: "popup__button-activ",
  popupFieldSet: "popup__item-error_activ",
  popupButton: ".popup__button",
  popupInput: ".popup__item",
  popupForm: ".popup__form"
};