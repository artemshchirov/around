import "./index.css";
import Api from "../components/Api.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from '../components/PopupWithImage.js'
import PopupSubmit from "../components/PopupSubmit.js";
import {
  formAddCard,
  formEditAvatar,
  formProfileEdit,
  addCardBtn,
  editAvatarBtn,
  editProfileBtn,
  usernameInput,
  aboutInput,
  validationObj,
} from "../utils/constants.js";

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-35',
  headers: {
    authorization: 'e3cd37b0-56ab-40c1-b26c-66c00d48e156',
    'Content-Type': 'application/json'
  }
})

const cardList = new Section({
  renderer: item => {
    const cardElement = createCard(item, 'card');
    cardList.addItem(cardElement);
  }
}, '.cards')

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([{ name, about, avatar }, initialCards]) => {
    userInfo.setUserInfo({ name, about });
    userInfo.setUserAvatar(avatar);
    cardList.renderItems(initialCards);
  })
  .catch(err => console.log(`Ошибка при загрузке данных пользователя и создании всех карточек: ${err}`));

const popupAddCard = new PopupWithForm({
  popupSelector: '.popup_card-add',
  handleFormSubmit: formData => {
    renderSaving(true, 'button_submit-add-card');
    api.addItem({
      name: formData['name-card_input'],
      link: formData['link-card_input']
    })
      .then(newCardObj => {
        const cardElement = createCard(newCardObj, 'card');
        cardList.addItem(cardElement, true);
        popupAddCard.close();
      })
      .catch(err => console.log(`Ошибка при создании новой карточки: ${err}`))
      .finally(() => renderSaving(false, 'button_submit-add-card'));

  },
})
popupAddCard.setEventListeners();

const popupEditProfile = new PopupWithForm({
  popupSelector: '.popup-profile-edit',
  handleFormSubmit: formValues => {
    renderSaving(true, 'button_submit-edit-profile');
    api.setUserInfo({
      name: formValues['name-edit_input'],
      about: formValues['about-edit_input']
    })
      .then(() => {
        userInfo.setUserInfo({
          name: formValues['name-edit_input'],
          about: formValues['about-edit_input']
        })
        popupEditProfile.close();
      })
      .catch(err => console.log(`Ошибка при обновлении данных пользователя: ${err}`))
      .finally(() => renderSaving(false, 'button_submit-edit-profile'));
  }
})
popupEditProfile.setEventListeners();

const popupImage = new PopupWithImage('.popup_card-fullscreen');
popupImage.setEventListeners();

const popupCardDelete = new PopupSubmit(
  '.popup_card-delete-confirm', {
  handleSubmit: () => popupCardDelete.submitAction()
})
popupCardDelete.setEventListeners();

const createCard = (cardObj, selector) => {
  const card = new Card(cardObj, selector, {
    handleCardClick: () => popupImage.open(cardObj),
    handleDeleteCard: () => {
      popupCardDelete.setSubmitAction({
        handleSubmitAction: () => {
          renderDeleting(true, 'button_form_submit-delete-card');
          api.deleteItem(card.getId())
            .then(() => {
              card.deleteCard();
              popupCardDelete.close();
            })
            .catch(err => console.log(`Ошибка при удалении карточки: ${err}`))
            .finally(() => renderDeleting(false, 'button_form_submit-delete-card'));
        }
      })
      popupCardDelete.open()
    },
    handleChangeLikeStatus: () => {
      if (card.getLikeStatus()) {
        api.addLike(card.getId())
          .then(cardLiked => card.updateLike(cardLiked.likes))
          .catch(err => console.log(`Ошибка при добавлении лайка: ${err}`));
      } else {
        api.deleteLike(card.getId())
          .then(cardLiked => card.updateLike(cardLiked.likes))
          .catch(err => console.log(`Ошибка при удалении лайка: ${err}`));
      }
    }
  });
  const username = userInfo.getUserInfo().name;
  const isOwner = cardObj.owner.name === username;
  const isLiked = cardObj.likes.some(item => item.name === username);
  return card.generateCard(isOwner, isLiked);
}

const renderSaving = (isSaving, buttonSelector) => {
  const button = document.querySelector(`.${buttonSelector}`);
  if (isSaving) {
    button.textContent = "Сохранение...";
  } else {
    button.textContent = "Сохранить";
  }
}

const renderDeleting = (isDeleting, buttonSelector) => {
  const button = document.querySelector(`.${buttonSelector}`);
  if (isDeleting) {
    button.textContent = "Удаление...";
  } else {
    button.textContent = "Да";
  }
}

const popupEditAvatar = new PopupWithForm({
  popupSelector: '.popup_edit-avatar',
  handleFormSubmit: formValues => {
    renderSaving(true, 'button_submit-change-avatar');
    api.setAvatar({
      avatar: formValues['link-avatar_input']
    })
      .then(() => {
        userInfo.setUserAvatar(formValues['link-avatar_input']);
        popupEditAvatar.close();
      })
      .catch(err => console.log(`Ошибка при обновлении аватара: ${err}`))
      .finally(() => renderSaving(false, 'button_submit-change-avatar'));
  }
})
popupEditAvatar.setEventListeners();

const userInfo = new UserInfo({
  nameSelector: '.profile__name',
  aboutSelector: '.profile__about',
  avatarSelector: '.profile__avatar'
})

const fillInputsUserData = () => {
  const { name, about } = userInfo.getUserInfo();
  usernameInput.value = name;
  aboutInput.value = about;
}

const openProfileEditPopup = () => {
  fillInputsUserData();
  formProfileEditValid.resetValidation();
  popupEditProfile.open();
}

const openAddCardPopup = () => {
  formAddCardValid.resetValidation();
  popupAddCard.open();
}

const openEditAvatarPopup = () => {
  formEditAvatarValid.resetValidation();
  popupEditAvatar.open()
}

const formProfileEditValid = new FormValidator(validationObj, formProfileEdit);
const formAddCardValid = new FormValidator(validationObj, formAddCard);
const formEditAvatarValid = new FormValidator(validationObj, formEditAvatar);
formProfileEditValid.enableValidation();
formAddCardValid.enableValidation();
formEditAvatarValid.enableValidation();

editProfileBtn.addEventListener("click", openProfileEditPopup);
addCardBtn.addEventListener("click", openAddCardPopup);
editAvatarBtn.addEventListener("click", openEditAvatarPopup);