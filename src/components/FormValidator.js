export default class FormValidator {
  /** 
   * Sets up form field validation.
   * 
   * @constructor
   * @param  {object} validationObj - Settings object with selectors and form classes.
   * @param  {object} formElem - Element of the form being validated.
   */
  constructor(validationObj, formElem) {
    this._settings = validationObj;
    this._form = formElem;
    this._inputList = Array.from(this._form.querySelectorAll(this._settings['inputSelector']));
    this._button = this._form.querySelector(this._settings['submitButtonSelector']);
    this._inactiveButtonClass = this._settings['inactiveButtonClass'];
  }

  enableValidation() {
    this._form.addEventListener('submit', evt => evt.preventDefault());
    this._setEventListeners();
  }

  _setEventListeners() {
    this._toggleButtonState();
    this._inputList.forEach(input => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this._toggleButtonState();
      })
    })
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this.disableButton();
    } else {
      this._enableButton();
    }
  }

  /**
   * @returns {bool} true if all inputs filled correct else false
   */
  _hasInvalidInput() {
    return this._inputList.some(input => !input.validity.valid);
  }

  disableButton() {
    this._button.disabled = true;
    this._button.classList.add(this._inactiveButtonClass);
  }

  _enableButton() {
    this._button.disabled = false;
    this._button.classList.remove(this._inactiveButtonClass);
  }

  /**
   * @param  {object} input - input element that will be validated.
   */
  _checkInputValidity(input) {
    this._input = input;
    this._error = this._form.querySelector(`#${this._input.id}-error`);
    if (!this._input.validity.valid) {
      this._showInputError(input, input.validationMessage);
    } else {
      this._hideInputError(input);
    }
  }

  _hideInputError(input) {
    this._error.textContent = '';
    this._error.classList.remove(this._settings['errorClass']);
    input.classList.remove(this._settings['inputErrorClass']);
  }

  _showInputError(input, errorText) {
    this._error.textContent = errorText;
    this._error.classList.add(this._settings['errorClass']);
    input.classList.add(this._settings['inputErrorClass']);
  }

  resetValidation() {
    this._toggleButtonState();
    this._inputList.forEach(input => {
      this._error = this._form.querySelector(`#${input.id}-error`);
      this._hideInputError(input);
    })
  }
}