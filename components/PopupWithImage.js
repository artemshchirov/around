import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._element = document.querySelector(this._popupSelector);
        
    }

    open() {
        console.log('PopupWithImage.open()');
        super.open();
    }
}