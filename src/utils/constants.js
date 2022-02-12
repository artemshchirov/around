export const formAddCard = document.querySelector(".popup_card-add").querySelector(".form");
export const formProfileEdit = document.querySelector(".popup-profile-edit").querySelector(".form");
export const formEditAvatar = document.querySelector(".popup_edit-avatar").querySelector(".form");
export const addCardBtn = document.querySelector(".button_profile_add");
export const editProfileBtn = document.querySelector(".button_profile_edit");
export const editAvatarBtn = document.querySelector(".profile__avatar-container");
export const usernameInput = document.getElementById("name-edit");
export const aboutInput = document.getElementById("about-edit");
export const submitChangeAvatarBtn = document.querySelector(".button_submit-change-avatar");
export const validationObj = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.button_form_submit',
    inactiveButtonClass: 'button_disabled',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__input-error_visible'
};