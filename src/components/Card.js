export default class Card {
  /**
   * Create card and add card to the page.
   * 
   * @constructor
   * @param  {string} {id - id of card received from backend
   * @param  {string} name - name for new card.
   * @param  {string} link} - source of new card.
   * @param  {string} cardSelector - Selector for html template of card being created.
   * @param  {func} handleCardClick - callback for opening popup with image if clicking on card.
   * @param  {func} handleDeleteCard - callback for deleting card from backend and then from page
   */
  constructor(card, cardSelector, { handleCardClick, handleDeleteCard, handleChangeLikeStatus }) {
    this._id = card._id;
    this._title = card.name;
    this._image = card.link;
    this._likes = card.likes;
    this._owner = card.owner.name;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCard = handleDeleteCard;
    this._handleChangeLikeStatus = handleChangeLikeStatus;
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
  generateCard(isOwner, isLiked) {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.card__image');
    this._buttonLike = this._element.querySelector('.button_like');
    this._countLikes = this._element.querySelector(".card__like-count");
    this._countLikes.textContent = this._likes.length;
    this._setEventListeners();
    this._element.querySelector('.card__title').textContent = this._title;
    this._cardImage.src = this._image;
    this._cardImage.alt = `Картинка пользователя: ${this._title}`
    this._isLiked = isLiked;
    if (!isOwner) this._element.querySelector('.button_card_delete').style.display = 'none';
    if (this._isLiked) this._buttonLike.classList.add('button_like_isLiked')
    return this._element;
  }

  /**
   * Enable delete, like buttons and click on image for fullscreen
   */
  _setEventListeners() {
    this._cardImage.addEventListener('click', () => this._handleCardClick());
    this._buttonLike.addEventListener('click', () => {
      this._isLiked = !this._isLiked;
      this._handleChangeLikeStatus();
    });
    this._element.querySelector('.button_card_delete').addEventListener('click', () => this._handleDeleteCard());
  }

  getLikeStatus() {
    return this._isLiked;
  }

  getId() {
    return this._id;
  }

  deleteCard() {
    this._element.remove();
  }

  updateLike(updatedLikes) {
    this._buttonLike.classList.toggle('button_like_isLiked');
    this._countLikes.textContent = updatedLikes.length;
  }
}
