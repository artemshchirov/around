import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  /**
   * @constructor
   * @param  {func} submitForm - callback function for form submiting
   * @param  {string} popupSelector
   */
  constructor(handleSubmit, popupSelector) {
    super(popupSelector);
    this._element = document.querySelector(this._popupSelector);
    this._form = this._element.querySelector('.form');
    this._handleFormSubmit = handleSubmit;
  }
  /**
   * Collect data from all form fields
   */
  _getInputValues() {
    console.log('PopupWithForm._getInputValues()');


  }

  close() {
    console.log('PopupWithForm.close()');
    super.close();
    this._form.reset();
  }

  setEventListeners() {
    console.log('PopupWithForm.setEventListeners()');
    super.setEventListeners();
    this._form.addEventListener('submit', this._handleFormSubmit);
  }
}