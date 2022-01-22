
export function openPopup(popupElement) {             //функции открытия попапов
  popupElement.classList.add('popup_opened');
};

export function closePopup(popupElement) {            //функции закрытия попапов
  popupElement.classList.remove('popup_opened');
};

document.addEventListener('keydown', function (evt) {       //закрываем попапы клавишей Esc
  
  if (evt.key === 'Escape') {
    const escButton = document.querySelector('.popup_opened');
    closePopup(escButton);
  }
}); 

document.addEventListener('click', function (evt) {        //закрываем попапы кликом по оверлею
  if (evt.target.classList.contains('popup_opened')) {
    closePopup(evt.target);
  }
}); 