import {
  editProfileBtn,
  cards,
  formProfileEdit,
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
// import Popup from "../components/Popup.js";
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

const popupEditProfile = new PopupWithForm(formProfileEditHandler, '.popup-profile-edit');
const popupAddCard = new PopupWithForm(formAddCardHandler, '.popup_card-add');
const userInfo = new UserInfo({ nameSelector: '.profile__name', aboutSelector: '.profile__about' });


const fillInputsUserData = () => {
  const { username, about } = userInfo.getUserInfo();
  usernameInput.value = username;
  aboutInput.value = about;
};

const openProfileEditPopup = () => {
  fillInputsUserData();
  popupEditProfile.open();
  popupEditProfile.setEventListeners();
};

function formProfileEditHandler() {
  userInfo.setUserInfo({ username: usernameInput.value, about: aboutInput.value })
  // updateProfile();
  popupEditProfile.close();
};

// const updateProfile = () => {
//   username.textContent = usernameInput.value;
//   about.textContent = aboutInput.value;
// };

function handleCardClick(cardObj) {
  const popupImage = new PopupWithImage(cardObj, '.popup_card-fullscreen');
  popupImage.setEventListeners();
  popupImage.open();
}

function formAddCardHandler() {
  const newCardObj = {
    name: newCardNameInput.value,
    src: newCardLinkInput.value,
    alt: `Картинка пользователя: "${newCardNameInput.value}"`,
  };
  addCard(newCardObj, 'card', handleCardClick);
  popupAddCard.close()
  formAddCard.reset();
  formAddCardValid.disableButton();
};

const addCard = (dataCardObj, selector) => {
  const card = new Card(dataCardObj, selector, handleCardClick);
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