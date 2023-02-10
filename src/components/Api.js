export default class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  _checkResponse(response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(`Кукусики: ${response.status}`);
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }

  getCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }

  editingProfile(userData) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: userData.name,
        about: userData.about,
      }),
    }).then((res) => this._checkResponse(res));
  }

  addNewCard(newCardData) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: newCardData.place,
        link: newCardData.linkImg,
      }),
    }).then((res) => this._checkResponse(res));
  }

  deleteCardApi(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }

  likeCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }

  dislikeCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }

  changeAvatar(linkAvatar) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(linkAvatar),
    }).then((res) => this._checkResponse(res));
  }
}
