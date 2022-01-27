import { elements, profileTitle, profileSubtitle, profileAvatarImg } from './data.js'
import { createCard } from './cards.js'

const config = {
    baseUrl: 'https://nomoreparties.co/v1/plus-cohort-6',
    headers: {
      authorization: '98c6601a-800a-42cb-b9f5-2fd5c4ee4584',
      'Content-Type': 'application/json'
    }
  }

  export let userId

  export function userInfo() {
    return fetch(`${config.baseUrl}/users/me`, {
      method: "GET",
      headers: config.headers  
    })
    .then((res) => res.json())
    .then((res) => {
        profileTitle.textContent = res.name;
        profileSubtitle.textContent = res.about;
        profileAvatarImg.src = res.avatar;
        userId = res._id;
        console.log(userId)
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

  export function editAvatar(avatarValue) {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: '98c6601a-800a-42cb-b9f5-2fd5c4ee4584',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: avatarValue
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

  



export function addCard(placeValue, linkValue) {
  return fetch('https://nomoreparties.co/v1/plus-cohort-6/cards ', {
    method: 'POST',
    headers: {
      authorization: '98c6601a-800a-42cb-b9f5-2fd5c4ee4584',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: placeValue,
      link: linkValue
    })
  })
  .then((res) => {
    console.log(res); 
  })
} 


export function removeCard(cardId) {
  return fetch('https://nomoreparties.co/v1/plus-cohort-6/cards ', {
    method: 'POST',
    headers: {
      authorization: '98c6601a-800a-42cb-b9f5-2fd5c4ee4584',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: placeValue,
      link: linkValue
    })
  })
  .then((res) => {
    console.log(res); 
  })
} 