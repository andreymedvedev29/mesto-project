import { elements, profileTitle, profileSubtitle, profileAvatar } from './data.js'
import { createCard } from './cards.js'

const config = {
    baseUrl: 'https://nomoreparties.co/v1/plus-cohort-6',
    headers: {
      authorization: '98c6601a-800a-42cb-b9f5-2fd5c4ee4584',
      'Content-Type': 'application/json'
    }
  }

  export function userInfo() {
    return fetch(`${config.baseUrl}/users/me`, {
      method: "GET",
      headers: config.headers  
    })
    .then((res) => res.json())
    .then((res) => {
        profileTitle.textContent = res.name;
        profileSubtitle.textContent = res.about;
        /*profileAvatar.src = res.avatar;*/
    }) 
  } 

  export function editProfile(nameValue, jobValue) {
    return fetch(`${config.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: '98c6601a-800a-42cb-b9f5-2fd5c4ee4584',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: nameValue,
        about: jobValue
      })
    });
  } 

  export function editAvatar() {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: '98c6601a-800a-42cb-b9f5-2fd5c4ee4584',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: ''
      })
    });
  } 
  
  export function getCards() {
    return fetch(`${config.baseUrl}/cards`, {
      method: "GET",
      headers: config.headers  
    })
    .then((res) => res.json())
    .then((res) => {
        res.forEach((cards) => {
          elements.append(createCard(cards.name, cards.link))
        }); 
    });
  } 

  



export function addCard() {
  return fetch('https://nomoreparties.co/v1/plus-cohort-6/cards ', {
    method: 'POST',
    headers: {
      authorization: '98c6601a-800a-42cb-b9f5-2fd5c4ee4584',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: 'ТЕСТ',
      link: 'https://cherepah.ru/wp-content/uploads/8/d/4/8d48bd1d7f70578c7130a21fc2411e77.jpg'
    })
  })
  .then((res) => {
    console.log(res); 
  })
} 