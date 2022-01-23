import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  /**
   * @constructor
   * @param  {func} submitForm - callback function for form submiting
   * @param  {string} popupSelector
   */
  constructor({ handleFormSubmit }, popupSelector) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._element = document.querySelector(this._popupSelector);
    this._form = this._element.querySelector('.form');
  }
  /**
   * Collect data from all form fields
   */
  _getInputValues() {
    // console.log('PopupWithForm._getInputValues()');
    let formsArray = Array.from(this._form.querySelectorAll('.form__input'));
    let formsValue = formsArray.map(el => el.value);
    let res = document.getElementById("name-edit");
    console.log('1',res.value)
    // console.log(formsArray)
    // console.log('formsvalue: ', formsValue);
    

  }

  close() {
    super.close();
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', this._handleFormSubmit);
  }
}