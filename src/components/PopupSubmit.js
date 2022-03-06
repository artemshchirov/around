import Popup from './Popup.js'

export default class PopupSubmit extends Popup {
  constructor(popupSelector, { handleSubmit }) {
    super(popupSelector);
    this._form = this._element.querySelector('.form');
    this._handleSubmit = handleSubmit;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', evt => {
      evt.preventDefault();
      this._handleSubmit();
    });
  }

  setSubmitAction({ handleSubmitAction }) {
    this.submitAction = handleSubmitAction;
  }
}