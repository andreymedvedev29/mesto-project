(()=>{"use strict";var e=document.querySelector(".popup__form"),t=e.querySelector(".popup__item"),n=(e.querySelector(".".concat(t.id,"-error")),function(e,t){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?t.classList.remove("popup__button-activ"):t.classList.add("popup__button-activ")}),o=document.querySelector(".popup-profile"),r=document.querySelector(".popup-avatar"),c=document.querySelector(".popup-place"),u=document.querySelector(".popup-img"),a=document.querySelector(".profile"),i=a.querySelector(".profile__edit-button"),p=o.querySelector(".popup__close-button"),l=(o.querySelector(".popup__button"),a.querySelector(".profile__title")),s=a.querySelector(".profile__subtitle"),d=a.querySelector(".profile__avatar-overlay"),_=a.querySelector(".profile__avatar"),m=o.querySelector(".popup__container"),f=document.getElementById("name-input"),y=document.getElementById("prof-input"),v=document.getElementById("avatar-input"),S=a.querySelector(".profile__add-button"),q=c.querySelector(".popup__close-button"),b=r.querySelector(".popup__close-button"),h=document.querySelector(".elements"),E=u.querySelector(".popup-img__image"),g=u.querySelector(".popup-img__title"),L=c.querySelector(".popup__container"),k=r.querySelector(".popup__container"),C=(c.querySelector(".popup__button"),document.getElementById("place-input")),T=document.getElementById("email-input"),x=u.querySelector(".popup__close-button");function j(e){e.classList.add("popup_opened")}function A(e){e.classList.remove("popup_opened")}function B(e,t){var n=document.querySelector("#place-template").content.querySelector(".elements__element").cloneNode(!0),o=n.querySelector(".elements__image");return o.src=t,o.alt=e,n.querySelector(".elements__group-title").textContent=e,n.querySelector(".elements__group-icon").addEventListener("click",(function(e){e.target.classList.toggle("elements__group-icon_activ")})),n.querySelector(".elements__close-button").addEventListener("click",(function(){n.remove()})),o.addEventListener("click",(function(){E.src=t,E.alt=e,g.textContent=e,j(u)})),n}document.querySelector(".elements__close-button"),document.addEventListener("keydown",(function(e){"Escape"===e.key&&A(document.querySelector(".popup_opened"))})),document.addEventListener("click",(function(e){e.target.classList.contains("popup_opened")&&A(e.target)}));var I,U={baseUrl:"https://nomoreparties.co/v1/plus-cohort-6",headers:{authorization:"98c6601a-800a-42cb-b9f5-2fd5c4ee4584","Content-Type":"application/json"}};i.addEventListener("click",(function(){j(o)})),p.addEventListener("click",(function(){A(o)})),d.addEventListener("click",(function(){j(r)})),b.addEventListener("click",(function(){A(r)})),S.addEventListener("click",(function(){document.getElementById("formPlace").reset(),j(c)})),q.addEventListener("click",(function(){A(c)})),x.addEventListener("click",(function(){A(u)})),m.addEventListener("submit",(function(e){e.preventDefault();var t=f.value,n=y.value;l.textContent=t,s.textContent=n,function(e,t){fetch("".concat(U.baseUrl,"/users/me"),{method:"PATCH",headers:{authorization:"98c6601a-800a-42cb-b9f5-2fd5c4ee4584","Content-Type":"application/json"},body:JSON.stringify({name:e,about:t})})}(t,n),e.target.reset(),A(o)})),L.addEventListener("submit",(function(e){e.preventDefault();var t=C.value,n=T.value,o=B(t,n);h.prepend(o),function(e,t){fetch("https://nomoreparties.co/v1/plus-cohort-6/cards ",{method:"POST",headers:{authorization:"98c6601a-800a-42cb-b9f5-2fd5c4ee4584","Content-Type":"application/json"},body:JSON.stringify({name:e,link:t})}).then((function(e){console.log(e)}))}(t,n),e.target.reset(),A(c)})),k.addEventListener("submit",(function(e){e.preventDefault();var t=v.value;_.src=t,function(e){fetch("".concat(U.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{authorization:"98c6601a-800a-42cb-b9f5-2fd5c4ee4584","Content-Type":"application/json"},body:JSON.stringify({avatar:e})})}(t),e.target.reset(),A(r)})),Array.from(document.querySelectorAll(".popup__form")).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),function(e){var t=Array.from(e.querySelectorAll(".popup__item")),o=e.querySelector(".popup__button");n(t,o),t.forEach((function(r){r.addEventListener("input",(function(){!function(e,t){t.validity.valid?function(e,t){var n=e.querySelector(".".concat(t.id,"-error"));t.classList.remove("popup__item_type_error"),n.classList.add("popup__item-error_activ"),n.textContent=""}(e,t):function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add("popup__item_type_error"),o.textContent=n,o.classList.add("popup__item-error_activ")}(e,t,t.validationMessage)}(e,r),n(t,o)}))}))}(e)})),fetch("".concat(U.baseUrl,"/cards"),{method:"GET",headers:U.headers}).then((function(e){return e.json()})).then((function(e){e.forEach((function(e){h.append(B(e.name,e.link))}))})),fetch("".concat(U.baseUrl,"/users/me"),{method:"GET",headers:U.headers}).then((function(e){return e.json()})).then((function(e){l.textContent=e.name,s.textContent=e.about,_.src=e.avatar,I=e._id,console.log(I)})),B()})();