(()=>{"use strict";var e=document.querySelector(".popup__form"),t=e.querySelector(".popup__item"),n=(e.querySelector(".".concat(t.id,"-error")),function(e,t){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?t.classList.remove("popup__button-activ"):t.classList.add("popup__button-activ")}),o=document.querySelector(".popup-profile"),r=document.querySelector(".popup-place"),c=document.querySelector(".popup-img"),p=document.querySelector(".profile"),u=p.querySelector(".profile__edit-button"),i=o.querySelector(".popup__close-button"),l=(o.querySelector(".popup__button"),p.querySelector(".profile__title")),a=p.querySelector(".profile__subtitle"),d=o.querySelector(".popup__container"),s=document.getElementById("name-input"),m=document.getElementById("prof-input"),_=p.querySelector(".profile__add-button"),y=r.querySelector(".popup__close-button"),f=document.querySelector(".elements"),v=c.querySelector(".popup-img__image"),q=c.querySelector(".popup-img__title"),S=r.querySelector(".popup__container"),g=(r.querySelector(".popup__button"),document.getElementById("place-input")),k=document.getElementById("email-input"),L=c.querySelector(".popup__close-button");function E(e){e.classList.add("popup_opened")}function b(e){e.classList.remove("popup_opened")}function h(e,t){var n=document.querySelector("#place-template").content.querySelector(".elements__element").cloneNode(!0),o=n.querySelector(".elements__image");return o.src=t,o.alt=e,n.querySelector(".elements__group-title").textContent=e,n.querySelector(".elements__group-icon").addEventListener("click",(function(e){e.target.classList.toggle("elements__group-icon_activ")})),n.querySelector(".elements__close-button").addEventListener("click",(function(){n.remove()})),o.addEventListener("click",(function(){v.src=t,v.alt=e,q.textContent=e,E(c)})),n}document.addEventListener("keydown",(function(e){"Escape"===e.key&&b(document.querySelector(".popup_opened"))})),document.addEventListener("click",(function(e){e.target.classList.contains("popup_opened")&&b(e.target)})),[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].forEach((function(e){f.prepend(h(e.name,e.link))})),u.addEventListener("click",(function(){E(o)})),i.addEventListener("click",(function(){b(o)})),d.addEventListener("submit",(function(e){e.preventDefault();var t=s.value,n=m.value;l.textContent=t,a.textContent=n,b(o)})),_.addEventListener("click",(function(){document.getElementById("formPlace").reset(),E(r)})),y.addEventListener("click",(function(){b(r)})),L.addEventListener("click",(function(){b(c)})),S.addEventListener("submit",(function(e){e.preventDefault();var t=h(g.value,k.value);f.prepend(t),b(r)})),Array.from(document.querySelectorAll(".popup__form")).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),function(e){var t=Array.from(e.querySelectorAll(".popup__item")),o=e.querySelector(".popup__button");n(t,o),t.forEach((function(r){r.addEventListener("input",(function(){!function(e,t){t.validity.valid?function(e,t){var n=e.querySelector(".".concat(t.id,"-error"));t.classList.remove("popup__item_type_error"),n.classList.add("popup__item-error_activ"),n.textContent=""}(e,t):function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add("popup__item_type_error"),o.textContent=n,o.classList.add("popup__item-error_activ")}(e,t,t.validationMessage)}(e,r),n(t,o)}))}))}(e)})),h()})();