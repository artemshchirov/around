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
    }

    open() {
        this._popupSelector.classList.add('popup_opened');
    }

    close() {
        this._popupSelector.classList.remove('popup_opened');
    }

    _handleEscClose() {
        
    }

    setEventListeners() {

    }
}
