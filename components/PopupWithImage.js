import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
    constructor({ name, src, alt }, popupSelector) {
        super(popupSelector);
        this._title = name;
        this._imageSrc = src;
        this._alt = alt;
    }

    open() {
        document.querySelector('.popup__title').textContent = this._title;
        this._imageElement = document.querySelector('.popup__image');
        this._imageElement.src = this._imageSrc;
        this._imageElement.alt = this._alt;
        super.open();
    }
}