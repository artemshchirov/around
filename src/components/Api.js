export default class Api {
  constructor({ baseUrl, headers }) {
    this._address = baseUrl;
    this._token = headers.authorization;
  }

  _handleResponse = response => {
    return response.ok
      ? response.json()
      : Promise.reject(`Ошибка, код: ${response.status}`);
  }

  setAvatar({ avatar }) {
    return fetch(`${this._address}/users/me/avatar`, {
      'method': 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: avatar
      })
    })
      .then(this._handleResponse);
  }

  getUserInfo() {
    return fetch(`${this._address}/users/me`, {
      headers: {
        authorization: this._token,
      }
    })
      .then(this._handleResponse);
  }

  setUserInfo({ name, about }) {
    return fetch(`${this._address}/users/me`, {
      'method': 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        about: about,
      })
    })
      .then(this._handleResponse);
  }

  getInitialCards() {
    return fetch(`${this._address}/cards`, {
      headers: {
        authorization: this._token,
      }
    })
      .then(this._handleResponse);
  }

  addItem({ name, link }) {
    return fetch(`${this._address}/cards`, {
      'method': 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        link: link,
      })
    })
      .then(this._handleResponse);
  }

  deleteItem(id) {
    return fetch(`${this._address}/cards/${id}`, {
      'method': 'DELETE',
      headers: {
        authorization: this._token,
      }
    })
      .then(this._handleResponse);
  }

  addLike(cardId) {    
    return fetch(`${this._address}/cards/${cardId}/likes`, {
      'method': 'PUT',
      headers: {
        authorization: this._token,
      }
    })
      .then(this._handleResponse);
  }

  deleteLike(cardId) {
    return fetch(`${this._address}/cards/${cardId}/likes`, {
      'method': 'DELETE',
      headers: {
        authorization: this._token,
      }
    })
      .then(this._handleResponse);
  }
}