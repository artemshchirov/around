import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }

    open({ name, link, alt }) {
        this._element.querySelector('.popup__image-title').textContent = name;
        this._image = this._element.querySelector('.popup__image');
        this._image.src = link;
        this._image.alt = alt;
        super.open();
    }
}