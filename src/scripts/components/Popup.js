export default class Popup {
  /**
   * Open and close popups. Also set event listeners
   * 
   * @constructor
   * @this   {Popup}
   * @param  {string} popupSelector - selector for finding popup-element on page
   */
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._element = document.querySelector(this._popupSelector);
  }

  open() {
    this._element.classList.add('popup_opened');
  }

  close() {
    document.removeEventListener('keydown', this._handleEscClose);
    this._element.classList.remove('popup_opened');
  }

  setEventListeners() {
    document.addEventListener('keydown', this._handleEscClose);
    this._closeButton = this._element.querySelector('.button_popup_close');
    this._overlay = this._element.querySelector('.popup__overlay');
    this._closeButton.addEventListener('click', () => this.close());
    this._overlay.addEventListener('click', () => this.close());
  }

  _handleEscClose = evt => {
    if (evt.key === "Escape") this.close();
  }
}
