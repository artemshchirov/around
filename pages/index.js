import {
  editProfileBtn,
  cards,
  formProfileEdit,
  // username,
  // about,
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
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

const popupEditProfile = new PopupWithForm(formProfileEditHandler, '.popup-profile-edit');
const popupAddCard = new PopupWithForm(formAddCardHandler, '.popup_card-add');

// const username = profile.querySelector(".profile__name");
// const about = profile.querySelector(".profile__about");

const userInfo = new UserInfo({nameSelector: '.profile__name', aboutSelector: '.profile__about'});
userInfo.setUserInfo({username:'Artem', about:'Seee'});

const fillInputsUserData = () => {
  usernameInput.value = username.textContent.trim();
  aboutInput.value = about.textContent.trim();
};

const openProfileEditPopup = () => {
  fillInputsUserData();
  popupEditProfile.open();
  popupEditProfile.setEventListeners();
};

function formProfileEditHandler() {
  updateProfile();
  popupEditProfile.close();
};

const updateProfile = () => {
  username.textContent = usernameInput.value;
  about.textContent = aboutInput.value;
};

function formAddCardHandler() {
  const newCardObj = {
    name: newCardNameInput.value,
    link: newCardLinkInput.value,
    alt: `Картинка пользователя: "${newCardNameInput.value}"`,
  };
  addCard(newCardObj, 'card');
  popupAddCard.close()
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
addCardBtn.addEventListener("click", () => {
  popupAddCard.open();
  popupAddCard.setEventListeners();
});

// formProfileEdit.addEventListener("submit", formProfileEditHandler);
// formAddCard.addEventListener("submit", formAddCardHandler);
initialCards.forEach(cardObj => addCard(cardObj, 'card'));