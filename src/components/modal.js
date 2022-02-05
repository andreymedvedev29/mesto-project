// функции открытия попапов
export function openPopup(popupElement) {             
  popupElement.classList.add('popup_opened');
  window.addEventListener("keydown", closeByEscape);
};

// функции закрытия попапов
export function closePopup(popupElement) {            
  popupElement.classList.remove('popup_opened');
  window.removeEventListener("keydown", closeByEscape);
};

// функции закрытия попапов клавишей Esc
function closeByEscape(evt) {   
  if (evt.key === "Escape") {
      const closedPopup = document.querySelector(".popup_opened");
      closePopup(closedPopup);
  }
}

// Закрываем попапы кликом по оверлею
const popups = document.querySelectorAll('.popup')

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup)
    }
  })
})
