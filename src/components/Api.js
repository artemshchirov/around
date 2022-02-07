export default class Api {
  constructor(options) {
    this._address = options.baseUrl;
    this._token = options.headers.authorization;
  }
  _handleResponse = response => {
    return response.ok
      ? response.json()
      : Promise.reject(`Ошибка: ${response.status}`)
  }

  getUserInfo() {
    return fetch(`${this._address}/users/me`, {
      headers: {
        authorization: this._token,
      }
    })
      .then(this._handleResponse)
  }

  setUserInfo() {
    return fetch(`${this._address}/users/me`, {
      'method': 'PUTCH',
      headers: {
        authorization: this._token,
      }
    })
      .then(this._handleResponse)
  }

  getInitialCards() {
    return fetch(`${this._address}/cards`, {
      headers: {
        authorization: this._token,
      }
    })
      .then(this._handleResponse)
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
      .then(this._handleResponse)
  }

  deleteItem(id) {
    return fetch(`${this._address}/cards/${id}`, {
      'method': 'DELETE',
      headers: {
        authorization: this._token,
      }
    })
      .then(this._handleResponse)
  }


}

