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
    newCardNameInput,
    newCardLinkInput,
    initialCards,
    validationObj,
} from "../utils/constants.js";


const defaultCardList = new Section({
    items: initialCards,
    renderer: item => {
        const cardElement = createCard(item, 'card')
        defaultCardList.addItem(cardElement);
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
        defaultCardList.addItem(newCardElement);
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

//!!!!!
// popupEditProfile._getInputValues();

const formProfileEditValid = new FormValidator(validationObj, formProfileEdit);
const formAddCardValid = new FormValidator(validationObj, formAddCard);
formProfileEditValid.enableValidation();
formAddCardValid.enableValidation();

editProfileBtn.addEventListener("click", openProfileEditPopup);
addCardBtn.addEventListener("click", openAddCardPopup);

defaultCardList.renderItems();