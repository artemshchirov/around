export default class Popup {
    /**
     * Open and close popups.
     * 
     * @constructor
     * @this   {Popup}
     * @param  {string} popupSelector - 
     */
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._elem = document.querySelector(this._popupSelector);
    }


    open() {
        // console.log('Popup.open()', this)
        this._elem.classList.add('popup_opened');
    }

    close() {
        this._elem.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }


    setEventListeners() {
        this._closeButton = this._elem.querySelector('.button_popup_close');
        this._overlay = this._elem.querySelector('.popup__overlay');

        this._closeButton.addEventListener('click', () => this.close());
        this._overlay.addEventListener('click', () => this.close());
        document.addEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose = evt => {
        if (evt.key === "Escape") this.close();
    }
}
