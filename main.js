(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{x:()=>M});var t=document.querySelector(".popup__form"),n=t.querySelector(".popup__item"),o=(t.querySelector(".".concat(n.id,"-error")),function(e,t){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?t.classList.remove("popup__button-activ"):t.classList.add("popup__button-activ")}),r=document.querySelector(".popup-profile"),c=document.querySelector(".popup-avatar"),u=document.querySelector(".popup-place"),i=document.querySelector(".popup-img"),a=document.querySelector(".profile"),l=a.querySelector(".profile__edit-button"),s=r.querySelector(".popup__close-button"),p=r.querySelector(".popup__button"),d=a.querySelector(".profile__title"),f=a.querySelector(".profile__subtitle"),_=a.querySelector(".profile__avatar-overlay"),m=a.querySelector(".profile__avatar"),y=r.querySelector(".popup__container"),v=document.getElementById("name-input"),h=document.getElementById("prof-input"),g=document.getElementById("avatar-input"),S=a.querySelector(".profile__add-button"),b=u.querySelector(".popup__close-button"),q=c.querySelector(".popup__close-button"),E=document.querySelector(".elements"),L=i.querySelector(".popup-img__image"),k=i.querySelector(".popup-img__title"),C=u.querySelector(".popup__container"),x=c.querySelector(".popup__container"),w=u.querySelector(".popup__button"),A=c.querySelector(".popup__button"),O=document.getElementById("place-input"),T=document.getElementById("email-input"),I=i.querySelector(".popup__close-button");function P(e){e.classList.add("popup_opened"),window.addEventListener("keydown",N)}function j(e){e.classList.remove("popup_opened"),window.removeEventListener("keydown",N)}function N(e){"Escape"===e.key&&j(document.querySelector(".popup_opened"))}document.addEventListener("click",(function(e){e.target.classList.contains("popup_opened")&&j(e.target)}));var U,B={baseUrl:"https://nomoreparties.co/v1/plus-cohort-6",headers:{authorization:"98c6601a-800a-42cb-b9f5-2fd5c4ee4584","Content-Type":"application/json"}},D=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))},J=function(e,t,n,o,r){var c=function(e,t,n,o,r){var c=document.querySelector("#place-template").content.querySelector(".elements__element").cloneNode(!0),u=c.querySelector(".elements__image"),a=c.querySelector(".elements__group-icon"),l=c.querySelector(".elements__group-likes"),s=c.querySelector(".elements__close-button");return c.owner=o,c.id=r,l.textContent=n.length,c.querySelector(".elements__group-title").textContent=e,u.src=t,u.alt=e,n?n.forEach((function(e){e._id===M&&a.classList.add("elements__group-icon_activ")})):l.textContent=0,c.querySelector(".elements__group-icon").addEventListener("click",G),M==o&&s.classList.add("elements__close-button_opened"),c.querySelector(".elements__close-button").addEventListener("click",H),u.addEventListener("click",(function(){L.src=t,L.alt=e,k.textContent=e,P(i)})),c}(e,t,n,o,r);E.prepend(c)},G=function(e){var t=e.target,n=t.closest(".elements__group-block"),o=t.closest(".elements__element"),r=n.querySelector(".elements__group-likes"),c=o.id;t.classList.contains("elements__group-icon_activ")?function(e){return fetch("https://nomoreparties.co/v1/plus-cohort-6/cards/likes/"+"".concat(e),{method:"DELETE",headers:B.headers,body:JSON.stringify({_id:e})}).then((function(e){return D(e)}))}(c).then((function(e){r.textContent=e.likes.length,t.classList.toggle("elements__group-icon_activ")})).catch((function(e){console.log(e)})):function(e){return fetch("https://nomoreparties.co/v1/plus-cohort-6/cards/likes/"+"".concat(e),{method:"PUT",headers:B.headers,body:JSON.stringify({_id:e})}).then((function(e){return D(e)}))}(c).then((function(e){r.textContent=e.likes.length,t.classList.toggle("elements__group-icon_activ")})).catch((function(e){console.log(e)}))};function H(e){var t,n=e.target;(t=(U=n.closest(".elements__element")).id,fetch("https://nomoreparties.co/v1/plus-cohort-6/cards/"+"".concat(t),{method:"DELETE",headers:B.headers,body:JSON.stringify({_id:t})}).then((function(e){return D(e)}))).then((function(){U.remove()})).catch((function(e){console.log(e)}))}var M,z=function(e,t){t.textContent=e?"Сохранение...":"Сохранить"};function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}Array.from(document.querySelectorAll(".popup__form")).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),function(e){var t=Array.from(e.querySelectorAll(".popup__item")),n=e.querySelector(".popup__button");o(t,n),t.forEach((function(r){r.addEventListener("input",(function(){!function(e,t){t.validity.valid?function(e,t){var n=e.querySelector(".".concat(t.id,"-error"));t.classList.remove("popup__item_type_error"),n.classList.add("popup__item-error_activ"),n.textContent=""}(e,t):function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add("popup__item_type_error"),o.textContent=n,o.classList.add("popup__item-error_activ")}(e,t,t.validationMessage)}(e,r),o(t,n)}))}))}(e)})),l.addEventListener("click",(function(){P(r)})),s.addEventListener("click",(function(){j(r)})),_.addEventListener("click",(function(){P(c)})),q.addEventListener("click",(function(){j(c)})),S.addEventListener("click",(function(){document.getElementById("formPlace").reset(),P(u)})),b.addEventListener("click",(function(){j(u)})),I.addEventListener("click",(function(){j(i)})),y.addEventListener("submit",(function(e){var t,n;e.preventDefault(),z(!0,p),(t=v.value,n=h.value,fetch("".concat(B.baseUrl,"/users/me"),{method:"PATCH",headers:B.headers,body:JSON.stringify({name:t,about:n})}).then((function(e){return D(e)}))).then((function(){d.textContent=v.value,f.textContent=h.value,p.classList.add("popup__button-activ"),e.target.reset(),j(r)})).catch((function(e){console.log(e)})).finally((function(){z(!1,p)}))})),x.addEventListener("submit",(function(e){var t;e.preventDefault(),z(!0,A),(t=g.value,fetch("".concat(B.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:B.headers,body:JSON.stringify({avatar:t})}).then((function(e){return D(e)}))).then((function(){m.src=g.value,A.classList.add("popup__button-activ"),e.target.reset(),j(c)})).catch((function(e){console.log(e)})).finally((function(){z(!1,A)}))})),C.addEventListener("submit",(function(e){e.preventDefault(),z(!0,w);var t=O.value,n=T.value;(function(e,t,n){return fetch("https://nomoreparties.co/v1/plus-cohort-6/cards ",{method:"POST",headers:B.headers,body:JSON.stringify({name:e,link:t,_id:n})}).then((function(e){return D(e)}))})(t,n,M).then((function(o){J(t,n,0,M,o._id),w.classList.add("popup__button-activ"),e.target.reset(),j(u)})).finally((function(){z(!1,w)}))})),Promise.all([fetch("".concat(B.baseUrl,"/users/me"),{method:"GET",headers:B.headers}).then((function(e){return D(e)})),fetch("".concat(B.baseUrl,"/cards"),{method:"GET",headers:B.headers}).then((function(e){return D(e)}))]).then((function(e){var t,n,o=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,c=[],u=!0,i=!1;try{for(n=n.call(e);!(u=(o=n.next()).done)&&(c.push(o.value),!t||c.length!==t);u=!0);}catch(e){i=!0,r=e}finally{try{u||null==n.return||n.return()}finally{if(i)throw r}}return c}}(t,n)||function(e,t){if(e){if("string"==typeof e)return $(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?$(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=o[0],c=o[1];d.textContent=r.name,f.textContent=r.about,m.src=r.avatar,M=r._id,c.reverse().forEach((function(e){var t=e.name,n=e.link,o=e.likes,r=e.owner._id,c=e._id;J(t,n,o,r,c)}))})).catch((function(e){return console.log(e)}))})();