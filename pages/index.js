import {
  editProfileBtn,
  cards,
  formProfileEdit,
  username,
  about,
  usernameInput,
  aboutInput,
  formAddCard,
  addCardBtn,
  newCardNameInput,
  newCardLinkInput,
  initialCards,
  validationObj,
} from "../utils/constants.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Popup from "../components/Popup.js";


const fillInputsUserData = () => {
  usernameInput.value = username.textContent.trim();
  aboutInput.value = about.textContent.trim();
};

const openProfileEditPopup = () => {
  fillInputsUserData();
  new Popup('.popup-profile-edit').open();
};

const updateProfile = () => {
  username.textContent = usernameInput.value;
  about.textContent = aboutInput.value;
};

const formProfileEditHandler = () => {
  updateProfile();
  new Popup('.popup-profile-edit').close();
};

const formAddCardHandler = () => {
  const newCardObj = {
    name: newCardNameInput.value,
    link: newCardLinkInput.value,
    alt: `Картинка пользователя: "${newCardNameInput.value}"`,
  };
  addCard(newCardObj, 'card');
  new Popup('.popup_card-add').close()
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
addCardBtn.addEventListener("click", () => new Popup('.popup_card-add').open());

formProfileEdit.addEventListener("submit", formProfileEditHandler);
formAddCard.addEventListener("submit", formAddCardHandler);
initialCards.forEach(cardObj => addCard(cardObj, 'card'));