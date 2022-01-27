import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }

    open({ name, src, alt }) {
        document.querySelector('.popup__title').textContent = name;
        this._imageElement = document.querySelector('.popup__image');
        this._imageElement.src = src;
        this._imageElement.alt = alt;
        super.open();
    }
}