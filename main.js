(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{x:()=>G});var t=function(e,t){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(n.popupButtonDisabled),t.disabled=!1):(t.classList.add(n.popupButtonDisabled),t.disabled=!0)},n={popupError:"popup__item_type_error",popupButtonDisabled:"popup__button-activ",popupFieldSet:"popup__item-error_activ",popupButton:".popup__button",popupInput:".popup__item",popupForm:".popup__form"},o=document.querySelector(".popup-profile"),r=document.querySelector(".popup-avatar"),c=document.querySelector(".popup-place"),u=document.querySelector(".popup-img"),i=document.querySelector(".profile"),a=i.querySelector(".profile__edit-button"),l=o.querySelector(".popup__close-button"),s=o.querySelector(".popup__button"),p=i.querySelector(".profile__title"),d=i.querySelector(".profile__subtitle"),f=i.querySelector(".profile__avatar-overlay"),_=i.querySelector(".profile__avatar"),m=o.querySelector(".popup__container"),y=document.getElementById("name-input"),v=document.getElementById("prof-input"),h=document.getElementById("avatar-input"),b=i.querySelector(".profile__add-button"),S=c.querySelector(".popup__close-button"),g=r.querySelector(".popup__close-button"),E=document.querySelector(".elements"),q=u.querySelector(".popup-img__image"),L=u.querySelector(".popup-img__title"),k=c.querySelector(".popup__container"),C=r.querySelector(".popup__container"),x=c.querySelector(".popup__button"),w=r.querySelector(".popup__button"),A=document.getElementById("place-input"),O=document.getElementById("email-input"),U=u.querySelector(".popup__close-button");function B(e){e.classList.add("popup_opened"),window.addEventListener("keydown",T)}function I(e){e.classList.remove("popup_opened"),window.removeEventListener("keydown",T)}function T(e){"Escape"===e.key&&I(document.querySelector(".popup_opened"))}document.querySelectorAll(".popup").forEach((function(e){e.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&I(e)}))}));var D,j={baseUrl:"https://nomoreparties.co/v1/plus-cohort-6",headers:{authorization:"98c6601a-800a-42cb-b9f5-2fd5c4ee4584","Content-Type":"application/json"}},P=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))},N=function(e,t,n,o,r){var c=function(e,t,n,o,r){var c=document.querySelector("#place-template").content.querySelector(".elements__element").cloneNode(!0),i=c.querySelector(".elements__image"),a=c.querySelector(".elements__group-icon"),l=c.querySelector(".elements__group-likes"),s=c.querySelector(".elements__close-button");return c.owner=o,c.id=r,l.textContent=n.length,c.querySelector(".elements__group-title").textContent=e,i.src=t,i.alt=e,n?n.forEach((function(e){e._id===G&&a.classList.add("elements__group-icon_activ")})):l.textContent=0,c.addEventListener("click",J),G==o&&s.classList.add("elements__close-button_opened"),c.addEventListener("click",F),i.addEventListener("click",(function(){q.src=t,q.alt=e,L.textContent=e,B(u)})),c}(e,t,n,o,r);E.prepend(c)},J=function(e){var t=e.target,n=t.closest(".elements__group-block"),o=t.closest(".elements__element"),r=n.querySelector(".elements__group-likes"),c=o.id;t.classList.contains("elements__group-icon_activ")?function(e){return fetch("".concat(j.baseUrl,"/cards/likes/")+"".concat(e),{method:"DELETE",headers:j.headers,body:JSON.stringify({_id:e})}).then((function(e){return P(e)}))}(c).then((function(e){r.textContent=e.likes.length,t.classList.toggle("elements__group-icon_activ")})).catch((function(e){console.log(e)})):function(e){return fetch("".concat(j.baseUrl,"/cards/likes/")+"".concat(e),{method:"PUT",headers:j.headers,body:JSON.stringify({_id:e})}).then((function(e){return P(e)}))}(c).then((function(e){r.textContent=e.likes.length,t.classList.toggle("elements__group-icon_activ")})).catch((function(e){console.log(e)}))};function F(e){var t,n=e.target;(t=(D=n.closest(".elements__element")).id,fetch("".concat(j.baseUrl,"/cards/")+"".concat(t),{method:"DELETE",headers:j.headers,body:JSON.stringify({_id:t})}).then((function(e){return P(e)}))).then((function(){D.remove()})).catch((function(e){console.log(e)}))}var G,H=function(e,t){t.textContent=e?"Сохранение...":"Сохранить"};function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function z(e){e.classList.add("popup__button-activ"),e.setAttribute("disabled",!0)}a.addEventListener("click",(function(){y.value=p.textContent,v.value=d.textContent,B(o)})),l.addEventListener("click",(function(){I(o)})),f.addEventListener("click",(function(){B(r)})),g.addEventListener("click",(function(){I(r)})),b.addEventListener("click",(function(){B(c)})),S.addEventListener("click",(function(){I(c)})),U.addEventListener("click",(function(){I(u)})),m.addEventListener("submit",(function(e){var t,n;e.preventDefault(),H(!0,s),(t=y.value,n=v.value,fetch("".concat(j.baseUrl,"/users/me"),{method:"PATCH",headers:j.headers,body:JSON.stringify({name:t,about:n})}).then((function(e){return P(e)}))).then((function(){p.textContent=y.value,d.textContent=v.value,I(o)})).catch((function(e){console.log(e)})).finally((function(){H(!1,s)}))})),C.addEventListener("submit",(function(e){var t;e.preventDefault(),H(!0,w),(t=h.value,fetch("".concat(j.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:j.headers,body:JSON.stringify({avatar:t})}).then((function(e){return P(e)}))).then((function(){_.src=h.value,z(w),e.target.reset(),I(r)})).catch((function(e){console.log(e)})).finally((function(){H(!1,w)}))})),k.addEventListener("submit",(function(e){e.preventDefault(),H(!0,x);var t=A.value,n=O.value;(function(e,t,n){return fetch("".concat(j.baseUrl,"/cards"),{method:"POST",headers:j.headers,body:JSON.stringify({name:e,link:t,_id:n})}).then((function(e){return P(e)}))})(t,n,G).then((function(o){N(t,n,0,G,o._id),z(x),e.target.reset(),I(c)})).finally((function(){H(!1,x)}))})),Promise.all([fetch("".concat(j.baseUrl,"/users/me"),{method:"GET",headers:j.headers}).then((function(e){return P(e)})),fetch("".concat(j.baseUrl,"/cards"),{method:"GET",headers:j.headers}).then((function(e){return P(e)}))]).then((function(e){var t,n,o=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,c=[],u=!0,i=!1;try{for(n=n.call(e);!(u=(o=n.next()).done)&&(c.push(o.value),!t||c.length!==t);u=!0);}catch(e){i=!0,r=e}finally{try{u||null==n.return||n.return()}finally{if(i)throw r}}return c}}(t,n)||function(e,t){if(e){if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=o[0],c=o[1];p.textContent=r.name,d.textContent=r.about,_.src=r.avatar,G=r._id,c.reverse().forEach((function(e){var t=e.name,n=e.link,o=e.likes,r=e.owner._id,c=e._id;N(t,n,o,r,c)}))})).catch((function(e){return console.log(e)})),Array.from(document.querySelectorAll(n.popupForm)).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),function(e){var o=Array.from(e.querySelectorAll(n.popupInput)),r=e.querySelector(n.popupButton);t(o,r),o.forEach((function(c){c.addEventListener("input",(function(){(function(e,t){t.validity.valid?function(e,t){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.popupError),o.classList.remove(n.popupFieldSet),o.textContent=""}(e,t):function(e,t,o){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add(n.popupError),r.textContent=o,r.classList.add(n.popupFieldSet)}(e,t,t.validationMessage)})(e,c),t(o,r)}))}))}(e)}))})();