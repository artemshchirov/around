import "./index.css";
import Api from "../components/Api.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from '../components/PopupWithImage.js'
import FormValidator from "../components/FormValidator.js";
import {
  editProfileBtn,
  formProfileEdit,
  usernameInput,
  aboutInput,
  formAddCard,
  addCardBtn,
  validationObj,
} from "../utils/constants.js";


const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-35',
  headers: {
    authorization: 'e3cd37b0-56ab-40c1-b26c-66c00d48e156',
    'Content-Type': 'application/json'
  }
});

api.getUserInfo()
  .then(({ name, about, avatar }) => {
    userInfo.setUserInfo({ name, about })
    userInfo.setUserAvatar(avatar)
  })
  .catch(err => console.log('Ошибка при загрузке информации о пользователе: ', err));


const cardList = new Section({
  renderer: item => {
    const cardElement = createCard(item, 'card');
    cardList.addItem(cardElement);
  }
}, '.cards');

api.getInitialCards()
  .then(initialCards => {
    cardList.renderItems(initialCards);
  })
  .catch(err => console.log('Ошибка при создании всех карточек: ', err));

const popupAddCard = new PopupWithForm({
  popupSelector: '.popup_card-add',
  handleFormSubmit: formData => {
    api.addItem({
      name: formData['name-card_input'],
      link: formData['link-card_input'],
    })
      .then(newCard => {
        const cardElement = createCard(newCard, 'card');
        cardList.addItem(cardElement, true);
      })
      .catch(err => console.log('Ошибка при создании новой карточки: ', err));

    popupAddCard.close()
  },
});
popupAddCard.setEventListeners();

// const popupEditProfile = new PopupWithForm({
//   popupSelector: '.popup-profile-edit',
//   handleFormSubmit: formData => {
//     userInfo.setUserInfo({
//       name: formData['name-edit_input'],
//       about: formData['about-edit_input']
//     })
//     popupEditProfile.close();
//   }
// });

const popupEditProfile = new PopupWithForm({
  popupSelector: '.popup-profile-edit',
  handleFormSubmit: formData => {
    api.setUserInfo({
      name: formData['name-edit_input'],
      about: formData['about-edit_input']
    })
      .then(
        userInfo.setUserInfo({
          name: formData['name-edit_input'],
          about: formData['about-edit_input']
        })
      )
      .catch(err => console.log('Ошибка при обновлении данных пользователя: ', err));
    popupEditProfile.close();
  }
});

popupEditProfile.setEventListeners();

const popupImage = new PopupWithImage('.popup_card-fullscreen');
popupImage.setEventListeners();

const createCard = (cardObj, selector) => {
  const card = new Card(cardObj, selector, {
    handleCardClick: () => popupImage.open(cardObj),
    handleDeleteCard: () => api.deleteItem(card.getId())
      .then(() => card.deleteCard())
      .catch(err => console.log('Ошибка при удалении карточки: ', err))
  });
  return card.generateCard();
}

const userInfo = new UserInfo({
  nameSelector: '.profile__name',
  aboutSelector: '.profile__about',
  avatarSelector: '.profile__avatar'
});


const fillInputsUserData = () => {
  const { name, about } = userInfo.getUserInfo();
  usernameInput.value = name;
  aboutInput.value = about;
};

const openProfileEditPopup = () => {
  fillInputsUserData();
  formProfileEditValid.resetValidation()
  popupEditProfile.open();
};

const openAddCardPopup = () => {
  formAddCardValid.resetValidation()
  popupAddCard.open();
};



const formProfileEditValid = new FormValidator(validationObj, formProfileEdit);
const formAddCardValid = new FormValidator(validationObj, formAddCard);
formProfileEditValid.enableValidation();
formAddCardValid.enableValidation();

editProfileBtn.addEventListener("click", openProfileEditPopup);
addCardBtn.addEventListener("click", openAddCardPopup);