import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  /**
   * @constructor
   * @param  {object} submitForm - callback function for form submiting
   * @param  {string} popupSelector
   */
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._element = document.querySelector(this._popupSelector);
    this._form = this._element.querySelector('.form');
    this._inputList = this._element.querySelectorAll('.form__input');  
  }
  /**
   * Collect data from all form fields
   * @return {object} this._formValues - data collected from inputs
   */
  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => {  // add values of all fields to object
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  close() {
    super.close();    
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', () => this._handleFormSubmit(this._getInputValues()));
  }
}