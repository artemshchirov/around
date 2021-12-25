import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { 
  editProfileBtn, 
  popupProfileEdit,
  formProfileEdit,
  username,
  about,
  usernameInput,
  aboutInput,
  popupAddCard,
  formAddCard,
  createCardButton,
  addCardBtn,
  newCardNameInput,
  newCardLinkInput,
  cards,
  popupCloseBtns,
  popupOverlays,
  initialCards,
  validationForms,
  validationObj } from "./constants.js";

export const handleKey = (evt) => {
  const popupOpened = document.querySelector(".popup_opened");
  if (popupOpened && evt.key === "Escape") closePopup(popupOpened);
};
const openPopup = (popup) => {
  document.addEventListener("keydown", handleKey);
  popup.classList.add("popup_opened");
};
const closePopup = (popup) => {
  document.removeEventListener("keydown", handleKey);
  popup.classList.remove("popup_opened");
};
const fillInputsUserData = () => {
  usernameInput.value = username.textContent.trim();
  aboutInput.value = about.textContent.trim();
};
const openProfileEditPopup = () => {
  fillInputsUserData();
  openPopup(popupProfileEdit);
};
const updateProfile = () => {
  username.textContent = usernameInput.value;
  about.textContent = aboutInput.value;
};
const formProfileEditHandler = () => {
  updateProfile();
  closePopup(popupProfileEdit);
};
const disableButton = (button, inactiveButtonClass) => {
  button.disabled = true;
  button.classList.add(inactiveButtonClass);
}
const formAddCardHandler = () => {
  const newCardObj = {
    name: newCardNameInput.value,
    link: newCardLinkInput.value,
    alt: `Картинка пользователя: "${newCardNameInput.value}"`,
  };
  addCard(newCardObj, 'card');
  closePopup(popupAddCard);
  formAddCard.reset();
  disableButton(createCardButton, validationObj.inactiveButtonClass);
};
const addCard = (obj, selector) => {
  const card = new Card(obj, selector);
  const cardElement = card.generateCard();
  cards.prepend(cardElement);
}

editProfileBtn.addEventListener("click", openProfileEditPopup);
addCardBtn.addEventListener("click", () => openPopup(popupAddCard));
formProfileEdit.addEventListener("submit", formProfileEditHandler);
formAddCard.addEventListener("submit", formAddCardHandler);
initialCards.forEach((obj) => addCard(obj, 'card'));
popupCloseBtns.forEach((btn) =>
  btn.addEventListener("click", (evt) =>
    closePopup(evt.target.closest(".popup_opened"))
  )
);
popupOverlays.forEach((overlay) =>
  overlay.addEventListener("click", (evt) =>
    closePopup(evt.target.closest(".popup_opened"))
  )
);
validationForms.forEach(formElem => {
  const form = new FormValidator(validationObj, formElem);
  form.enableValidation();
})
