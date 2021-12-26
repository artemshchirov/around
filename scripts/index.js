import {
  editProfileBtn,
  cards,
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
  popupCloseBtns,
  popupOverlays,
  initialCards,
  validationObj,
} from "./constants.js";
import { openPopup, closePopup } from "./util.js";
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";


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

const addCard = (dataCardObj, selector) => {
  const card = new Card(dataCardObj, selector);
  const cardElement = card.generateCard();
  cards.prepend(cardElement);
}


const formProfileEditValid = new FormValidator(validationObj, formProfileEdit);
const formAddCardValid = new FormValidator(validationObj, formAddCard);
formProfileEditValid.enableValidation();
formAddCardValid.enableValidation();


editProfileBtn.addEventListener("click", openProfileEditPopup);
addCardBtn.addEventListener("click", () => openPopup(popupAddCard));
formProfileEdit.addEventListener("submit", formProfileEditHandler);
formAddCard.addEventListener("submit", formAddCardHandler);
initialCards.forEach(cardObj => addCard(cardObj, 'card'));
popupCloseBtns.forEach(btn =>
  btn.addEventListener("click", evt =>
    closePopup(evt.target.closest(".popup_opened")))
);
popupOverlays.forEach(overlay =>
  overlay.addEventListener("click", evt =>
    closePopup(evt.target.closest(".popup_opened")))
);