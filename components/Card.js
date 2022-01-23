import { popupFullscreen } from "../utils/constants.js";
// import { openPopup } from "../utils/util.js";

export default class Card {
  /**
   * Create card and add card to the page
   * 
   * @param  {string} {name
   * @param  {string} src
   * @param  {string} alt}
   * @param  {string} cardSelector
   * @param  {func} handleCardClick - callback for opening popup with image if clicking on card
   */
  constructor({ name, src, alt }, cardSelector, handleCardClick) {
    this._title = name;
    this._image = src;
    this._alt = alt;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
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
    this._imageData = { name: this._title, src: this._image, alt: this._alt }
    this._cardImage.addEventListener('click', () => this._handleCardClick(this._imageData));
    this._buttonLike.addEventListener('click', () => this._handleChangeLikeStatus());
    this._element.querySelector('.button_card_delete').addEventListener('click', () => this._handleDeleteCard());
  }

  _handleChangeLikeStatus() {
    this._buttonLike.classList.toggle('button_like_isLiked');
  }

  _handleDeleteCard() {
    this._element.remove();
  }
}
