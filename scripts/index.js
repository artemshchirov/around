import { Card } from "./Card.js";
import { openPopup, closePopup } from "./util.js";
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
  addCardBtn,
  newCardNameInput,
  newCardLinkInput,
  cards,
  popupCloseBtns,
  popupOverlays,
  initialCards,
  formProfileEditValid,
  formAddCardValid,
} from "./constants.js";

export const handleKey = evt => {
  const popupOpened = document.querySelector(".popup_opened");
  if (popupOpened && evt.key === "Escape") closePopup(popupOpened);
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

const formAddCardHandler = () => {
  const newCardObj = {
    name: newCardNameInput.value,
    link: newCardLinkInput.value,
    alt: `Картинка пользователя: "${newCardNameInput.value}"`,
  };
  addCard(newCardObj, 'card');
  closePopup(popupAddCard);
  formAddCard.reset();
  formAddCardValid.disableButton();
};

const addCard = (obj, selector) => {
  const card = new Card(obj, selector);
  const cardElement = card.generateCard();
  cards.prepend(cardElement);
}

formAddCardValid.enableValidation();
formProfileEditValid.enableValidation();

editProfileBtn.addEventListener("click", openProfileEditPopup);
addCardBtn.addEventListener("click", () => openPopup(popupAddCard));
formProfileEdit.addEventListener("submit", formProfileEditHandler);
formAddCard.addEventListener("submit", formAddCardHandler);
initialCards.forEach(obj => addCard(obj, 'card'));
popupCloseBtns.forEach(btn =>
  btn.addEventListener("click", evt =>
    closePopup(evt.target.closest(".popup_opened")))
);
popupOverlays.forEach(overlay =>
  overlay.addEventListener("click", evt =>
    closePopup(evt.target.closest(".popup_opened")))
);