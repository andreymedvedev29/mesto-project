import { elements } from './data.js'
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
        console.log(res);
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
          elements.prepend(createCard(cards.name, cards.link))
        }); 
    });
  } 

  
fetch('https://nomoreparties.co/v1/plus-cohort-6/users/me', {
  method: 'PATCH',
  headers: {
    authorization: '98c6601a-800a-42cb-b9f5-2fd5c4ee4584',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Marie',
    about: 'PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP'
  })
});