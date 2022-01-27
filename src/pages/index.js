import "./index.css";
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
    initialCards,
    validationObj,
} from "../utils/constants.js";


const cardList = new Section({
    items: initialCards,
    renderer: item => {
        const cardElement = createCard(item, 'card');
        cardList.addItem(cardElement);
    }
}, '.cards');

const popupAddCard = new PopupWithForm({
    popupSelector: '.popup_card-add',
    handleFormSubmit: formData => {
        const newCardElement = createCard({
            name: formData['name-card_input'],
            src: formData['link-card_input'],
            alt: `Картинка пользоватля: ${formData['name-card_input']}`
        },
            'card'
        );
        cardList.addItem(newCardElement);
        popupAddCard.close()
    },
});
popupAddCard.setEventListeners();

const popupEditProfile = new PopupWithForm({
    popupSelector: '.popup-profile-edit',
    handleFormSubmit: formData => {
        userInfo.setUserInfo({
            username: formData['name-edit_input'],
            about: formData['about-edit_input']
        })
        popupEditProfile.close();
    }
});
popupEditProfile.setEventListeners();

const popupImage = new PopupWithImage('.popup_card-fullscreen');
popupImage.setEventListeners();

const createCard = (cardObj, selector) => {
    const card = new Card(cardObj, selector, {
        handleCardClick: () => popupImage.open(cardObj)
    });
    return card.generateCard();
}

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

cardList.renderItems();