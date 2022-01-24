import Card from "./scripts/components/Card.js";
import Section from "./scripts/components/Section.js";
import UserInfo from "./scripts/components/UserInfo.js";
import PopupWithForm from "./scripts/components/PopupWithForm.js";
import PopupWithImage from './scripts/components/PopupWithImage.js'
import FormValidator from "./scripts/components/FormValidator.js";
import {
    editProfileBtn,
    formProfileEdit,
    usernameInput,
    aboutInput,
    formAddCard,
    addCardBtn,
    initialCards,
    validationObj,
} from "./scripts/utils/constants.js";
import "./pages/index.css";


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
        formAddCardValid.disableButton();
    },
});

const createCard = (cardObj, selector) => {
    const card = new Card(cardObj, selector, {
        handleCardClick: () => {
            const popupImage = new PopupWithImage(cardObj, '.popup_card-fullscreen');
            popupImage.setEventListeners();
            popupImage.open();
        }
    });
    return card.generateCard();
}

const userInfo = new UserInfo({
    nameSelector: '.profile__name',
    aboutSelector: '.profile__about'
});

const popupEditProfile = new PopupWithForm({
    popupSelector: '.popup-profile-edit',
    handleFormSubmit: () => {
        userInfo.setUserInfo({
            username: usernameInput.value,
            about: aboutInput.value
        })
        popupEditProfile.close();
    }
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


const formProfileEditValid = new FormValidator(validationObj, formProfileEdit);
const formAddCardValid = new FormValidator(validationObj, formAddCard);
formProfileEditValid.enableValidation();
formAddCardValid.enableValidation();

editProfileBtn.addEventListener("click", openProfileEditPopup);
addCardBtn.addEventListener("click", openAddCardPopup);

cardList.renderItems();