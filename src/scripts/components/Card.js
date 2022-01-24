export default class Card {
  /**
   * Create card and add card to the page.
   * 
   * @constructor
   * @param  {string} {name - name for new card.
   * @param  {string} src - source of new card.
   * @param  {string} alt} - alt for new card.
   * @param  {string} cardSelector - Selector for html template of card being created.
   * @param  {func} handleCardClick - callback for opening popup with image if clicking on card.
   */
  constructor({ name, src, alt }, cardSelector, { handleCardClick }) {
    this._title = name;
    this._image = src;
    this._alt = alt;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  /**
   * @return {object} - Card element template html; 
   */
  _getTemplate() {
    const cardElement = document
      .querySelector(`#${this._cardSelector}`)
      .content
      .querySelector('.card')
      .cloneNode(true);
    return cardElement;
  }

  /**
   * Get card element template html and add him new parameters; 
   * 
   * @return {object} - Card object ready to be added to the page
   */
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

  /**
   * Enable delete, like buttons and click on image for fullscreen
   */
  _setEventListeners() {
    this._cardImage.addEventListener('click', () => this._handleCardClick());
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
