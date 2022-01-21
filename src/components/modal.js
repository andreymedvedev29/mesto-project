/*export const popupProfile = document.querySelector('.popup-profile');//находим попап профиля
export const popupPlace = document.querySelector('.popup-place');//находим попап места
export const popupImg = document.querySelector('.popup-img');//находим попап картинки*/

export function openPopup(popupElement) {             //функции открытия попапов
  popupElement.classList.add('popup_opened');
};

export function closePopup(popupElement) {            //функции закрытия попапов
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