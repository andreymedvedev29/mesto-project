
const config = {
    baseUrl: 'https://nomoreparties.co/v1/plus-cohort-6',
    headers: {
      authorization: '98c6601a-800a-42cb-b9f5-2fd5c4ee4584',
      'Content-Type': 'application/json'
    }
  }

const getResponseData = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

export function getUser() {
  return fetch(`${config.baseUrl}/users/me`, {
    method: "GET",
    headers: config.headers
  })
    .then(res => getResponseData(res));
} 

export function getCards() {
  return fetch(`${config.baseUrl}/cards`, {
    method: "GET",
    headers: config.headers
  })
    .then(res => getResponseData(res));
}

export const getAppInfo = () => {
  return Promise.all([getUser(), getCards()]);
};


export function editProfile(nameValue, jobValue) {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: nameValue,
      about: jobValue
    })
  })
    .then(res => getResponseData(res));
} 

export function editAvatar(avatarValue) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatarValue
    })
  })
    .then(res => getResponseData(res));
}

export function sendCard(placeValue, linkValue, userId) {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: placeValue,
      link: linkValue,
      _id: userId
    })
  })
    .then(res => getResponseData(res));
}  
 
export function deleteCard(cardId) {
  return fetch('https://nomoreparties.co/v1/plus-cohort-6/cards/' + `${cardId}`, {
    method: 'DELETE',
    headers: config.headers,
    body: JSON.stringify({
      _id: cardId
    })
  })
  .then(res => getResponseData(res));
}  

export function sendLike(cardId) {
  return fetch(`${config.baseUrl}/cards/likes/` + `${cardId}`, {
    method: 'PUT',
    headers: config.headers,
    body: JSON.stringify({
      _id: cardId
    })
  })
  .then(res => getResponseData(res));
} 

export function deleteLike(cardId) {
  return fetch(`${config.baseUrl}/cards/likes/` + `${cardId}`, {
    method: 'DELETE',
    headers: config.headers,
    body: JSON.stringify({
      _id: cardId
    })
  })
  .then(res => getResponseData(res));
}  

