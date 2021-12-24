const popupFullscreen = document.querySelector('.popup_card-fullscreen')


export class Card {
  constructor(data, cardSelector) {
    this._title = data.name;
    this._image = data.link;
    this._alt = data.alt;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(`#${this._cardSelector}`)
      .content
      .querySelector('.card')
      .cloneNode(true);
    return cardElement;
  }
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector(".card__title").textContent = this._title;
    this._element.querySelector(".card__image").src = this._image;
    this._element.querySelector(".card__image").alt = this._alt;
    return this._element;
  }
  _setEventListeners() {
    this._element.querySelector('.card__image').addEventListener('click', () => this._handleOpenCardFullscreen());
    this._element.querySelector('.button_like').addEventListener('click', () => this._handleChangeLikeStatus());
    this._element.querySelector('.button_card_delete').addEventListener('click', () => this._handleDeleteCard());
  }
  _handleChangeLikeStatus() {
    this._element.querySelector('.button_like').classList.toggle('button_like_isLiked');
  }
  _handleDeleteCard() {
    this._element.remove();
  }
  _handleOpenCardFullscreen() {
    popupFullscreen.querySelector('.popup__title').textContent = this._title;
    popupFullscreen.querySelector('.popup__image').src = this._image;
    popupFullscreen.querySelector('.popup__image').alt = this._alt;
    popupFullscreen.classList.add("popup_opened");
  }
}
