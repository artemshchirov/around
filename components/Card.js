import { popupFullscreen } from "../utils/constants.js";
import { openPopup } from "../utils/util.js";


export default class Card {
  constructor({name, link, alt}, cardSelector) {
    this._title = name;
    this._image = link;
    this._alt = alt;
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
    this._cardImage = this._element.querySelector('.card__image');
    this._buttonLike = this._element.querySelector('.button_like');
    this._setEventListeners();
    this._element.querySelector('.card__title').textContent = this._title;
    this._cardImage.src = this._image;
    this._cardImage.alt = this._alt;
    return this._element;
  }

  _setEventListeners() {
    this._cardImage.addEventListener('click', () => this._handleOpenCardFullscreen());
    this._buttonLike.addEventListener('click', () => this._handleChangeLikeStatus());
    this._element.querySelector('.button_card_delete').addEventListener('click', () => this._handleDeleteCard());
  }

  _handleChangeLikeStatus() {
    this._buttonLike.classList.toggle('button_like_isLiked');
  }

  _handleDeleteCard() {
    this._element.remove();
  }

  _handleOpenCardFullscreen() {
    this._popupImage = popupFullscreen.querySelector('.popup__image');
    this._popupImage.src = this._image;
    this._popupImage.alt = this._alt;
    popupFullscreen.querySelector('.popup__title').textContent = this._title;
    openPopup(popupFullscreen);
  }

}
