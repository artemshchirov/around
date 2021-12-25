export class FormValidator {
    constructor(validationObj, formElem) {
        this._settings = validationObj;
        this._form = formElem;
        this._inputs = Array.from(this._form.querySelectorAll(this._settings['inputSelector']));
        this._button = this._form.querySelector(this._settings['submitButtonSelector']);
        this._inactiveButtonClass = this._settings['inactiveButtonClass'];
    }
    enableValidation() {
        this._form.addEventListener('submit', evt => evt.preventDefault());
        this._setEventListeners();
    }
    _setEventListeners() {
        this._toggleButtonState();
        this._inputs.forEach(input => {
            input.addEventListener('input', () => {
                this._checkInputValidity(input);
                this._toggleButtonState();
            })
        })
    }
    _toggleButtonState() {
        if (this._hasInvalidInput()) {
            this._disableButton();
        } else {
            this._enableButton();
        }
    }
    _hasInvalidInput() {
        return this._inputs.some(input => !input.validity.valid);
    }
    _disableButton() {
        this._button.disabled = true;
        this._button.classList.add(this._inactiveButtonClass);
    }
    _enableButton() {
        this._button.disabled = false;
        this._button.classList.remove(this._inactiveButtonClass);
    }
    _checkInputValidity(input) {
        this._input = input;
        this._error = this._form.querySelector(`#${this._input.id}-error`);
        if (!this._input.validity.valid) {
            this._showInputError();
        } else {
            this._hideInputError();
        }
    }
    _hideInputError() {
        this._error.textContent = '';
        this._error.classList.remove(this._settings['errorClass']);
        this._input.classList.remove(this._settings['inputErrorClass']);
    }
    _showInputError() {
        this._error.textContent = this._input.validationMessage;
        this._error.classList.add(this._settings['errorClass']);
        this._input.classList.add(this._settings['inputErrorClass']);
    }
}