import Card from "../components/Card.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from '../components/PopupWithImage.js'
import FormValidator from "../components/FormValidator.js";
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



const popupEditProfile = new PopupWithForm({
  handleFormSubmit: () => {
    userInfo.setUserInfo({
      username: usernameInput.value,
      about: aboutInput.value
    })
    popupEditProfile.close();
  }
}, '.popup-profile-edit');

const popupAddCard = new PopupWithForm({
  handleFormSubmit: () => {
    const newCardObj = {
      name: newCardNameInput.value,
      src: newCardLinkInput.value,
      alt: `Картинка пользователя: "${newCardNameInput.value}"`,
    };
    addCard(newCardObj, 'card', handleCardClick);
    popupAddCard.close()
    formAddCard.reset();
    formAddCardValid.disableButton();
  },
}, '.popup_card-add');

const userInfo = new UserInfo({
  nameSelector: '.profile__name',
  aboutSelector: '.profile__about'
});


const fillInputsUserData = () => {
  const { username, about } = userInfo.getUserInfo();
  usernameInput.value = username;
  aboutInput.value = about;
};

const openProfileEditPopup = () => {
  fillInputsUserData();
  popupEditProfile.setEventListeners();
  popupEditProfile.open();
};

const openAddCardPopup = () => {
  popupAddCard.setEventListeners();
  popupAddCard.open();
}

const addCard = (cardObj, selector) => {
  const card = new Card(cardObj, selector, {
    handleCardClick: () => {
      const popupImage = new PopupWithImage(cardObj, '.popup_card-fullscreen');
      popupImage.setEventListeners();
      popupImage.open();
    }
  });
  const cardElement = card.generateCard();
  cards.prepend(cardElement);
}

popupEditProfile._getInputValues();

const formProfileEditValid = new FormValidator(validationObj, formProfileEdit);
const formAddCardValid = new FormValidator(validationObj, formAddCard);
formProfileEditValid.enableValidation();
formAddCardValid.enableValidation();

editProfileBtn.addEventListener("click", openProfileEditPopup);
addCardBtn.addEventListener("click", openAddCardPopup);

initialCards.forEach(cardObj => addCard(cardObj, 'card'));