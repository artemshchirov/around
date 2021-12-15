const validationObj = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.button_form_submit',
  inactiveButtonClass: 'button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_visible'
}

const showInputError = (formElem, inputElem, errorMessageText, errorMessageClass, inputErrorClass) => {
  const errorElem = formElem.querySelector(`#${inputElem.id}-error`);
  errorElem.textContent = errorMessageText;
  errorElem.classList.add(errorMessageClass);
  inputElem.classList.add(inputErrorClass);
}
const hideInputError = (formElem, inputElem, errorMessageClass, inputErrorClass) => {
  const errorElem = formElem.querySelector(`#${inputElem.id}-error`);
  errorElem.textContent = '';
  errorElem.classList.remove(errorMessageClass);
  inputElem.classList.remove(inputErrorClass);
}
const checkInputValidity = (formElem, inputElem, { inputErrorClass, errorClass }) => {
  if (!inputElem.validity.valid) {
    showInputError(formElem, inputElem, inputElem.validationMessage, errorClass, inputErrorClass);
  } else {
    hideInputError(formElem, inputElem, errorClass, inputErrorClass);
  };
}
const hasInvalidInput = inputList => {
  return inputList.some(inputElem => !inputElem.validity.valid);
}
const disableButton = (button, inactiveButtonClass) => {
  button.disabled = true;
  button.classList.add(inactiveButtonClass);
}
const enableButton = (button, inactiveButtonClass) => {
  button.disabled = false;
  button.classList.remove(inactiveButtonClass);
}
const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
  if (hasInvalidInput(inputList)) {
    disableButton(buttonElement, inactiveButtonClass);
  } else {
    enableButton(buttonElement, inactiveButtonClass);
  };
}
const setEventListeners = (formElem, { inputSelector, submitButtonSelector, inactiveButtonClass, ...rest }) => {
  const inputList = Array.from(formElem.querySelectorAll(inputSelector));
  const buttonElem = formElem.querySelector(submitButtonSelector);
  toggleButtonState(inputList, buttonElem, inactiveButtonClass);
  inputList.forEach(inputElem => {
    inputElem.addEventListener('input', () => {
      checkInputValidity(formElem, inputElem, rest);
      toggleButtonState(inputList, buttonElem, inactiveButtonClass);
    });
  });
}
const enableValidation = ({ formSelector, ...rest }) => {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach(formElem => {
    formElem.addEventListener('submit', evt => evt.preventDefault());
    setEventListeners(formElem, rest);
  });
}

enableValidation(validationObj);