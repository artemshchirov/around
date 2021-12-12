const validationObj = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.button_form_submit',
    inactiveButtonClass: 'button_disabled',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__input-error_visible'
}

const showInputError = (formElem, inputElem, errMessage) => {
    const errElem = formElem.querySelector(`.${inputElem.id}-error`);
    inputElem.classList.add('form__input_type_error');
    errElem.textContent = errMessage;
    console.log(errElem);
    errElem.classList.add('form__input-error_visible');
    console.log(errElem);
}

const hideInputError = (formElem, inputElem) => {
    const errElem = formElem.querySelector(`.${inputElem.id}-error`);
    inputElem.classList.remove('form__input_type_error');
    errElem.classList.remove('form__input-error_visible');
    errElem.textContent = '';
}

const checkInputValidity = (formElem, inputElem) => {
    if (!inputElem.validity.valid) {
        showInputError(formElem, inputElem, inputElem.validationMessage);
    } else {
        hideInputError(formElem, inputElem);
    };
}

const setEventListeners = formElem => {
    const inputList = Array.from(formElem.querySelectorAll('.form__input'));
    const buttonElem = formElem.querySelector('.button_form_submit');
    toggleButtonState(inputList, buttonElem);
    inputList.forEach((inputElem) => {
        inputElem.addEventListener('input', () => {
            checkInputValidity(formElem, inputElem);
            toggleButtonState(inputList, buttonElem);
        });
    });
}

const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.form'));
    console.log(formList);
    formList.forEach((formElem) => {
        formElem.addEventListener('submit', evt => {
            evt.preventDefault();
        });
        const fieldsetList = Array.from(formElem.querySelectorAll('.form__container'));
        fieldsetList.forEach(fieldset => {
            setEventListeners(fieldset);
        });
    });
}

const hasInvalidInput = inputList => {
    return inputList.some(inputElement => {
        return !inputElement.validity.valid;
    });
}

const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add('button_disabled');
        //! добавить удаление transition
    } else {
        buttonElement.classList.remove('button_disabled');
    }
}

enableValidation();