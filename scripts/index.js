//? Возможнo ли оптимизировать до DRY?

const editProfileBtn = document.querySelector('.button_profile_edit');
const popupProfileEdit = document.querySelector('.popup-profile-edit');
const popupProfileEditCloseBtn = popupProfileEdit.querySelector('.button_form_close'); //!
const formProfileEdit = popupProfileEdit.querySelector('.form');
const profile = document.querySelector('.profile');
const username = profile.querySelector('.profile__name');
const about = profile.querySelector('.profile__about');
const usernameInput = document.getElementById('name-edit_input_id');
const aboutInput = document.getElementById('about-edit_input_id');

const popupAddCard = document.querySelector('.popup-add-card');
const formAddCard = popupAddCard.querySelector('.form')
const popupAddCardCloseBtn = popupAddCard.querySelector('.button_form_close');
const addCardBtn = document.querySelector('.button_profile_add');
const userCardNameInput = document.getElementById('name-card_input_id');
const userCardLinkInput = document.getElementById('link-card_input_id');
const cards = document.querySelector('.cards');

const openPopup = (popup) => popup.classList.add('popup_opened');
const closePopup = (popup) => popup.classList.remove('popup_opened');

const openProfileEditPopup = () => {
    openPopup(popupProfileEdit);
    usernameInput.value = username.textContent.trim();
    aboutInput.value = about.textContent.trim();
}
const formProfileEditHandler = (evt) => {
    evt.preventDefault();
    refreshProfile();
    let popupSection = evt.target.parentElement.parentElement;
    closePopup(popupSection);
}
const refreshProfile = () => {
    username.textContent = usernameInput.value;
    about.textContent = aboutInput.value;
}

const formAddCardHandler = (evt) => {
    evt.preventDefault();
    addCard();
    let popupSection = evt.target.parentElement.parentElement;
    closePopup(popupSection);
}
const addCard = () => {
    let cardTemplate = document.querySelector('#card').content;
    let userCard = cardTemplate.querySelector('.card').cloneNode(true);
    userCard.querySelector('.card__title').textContent = userCardNameInput.value;
    userCard.querySelector('.card__image').src = userCardLinkInput.value;
    cards.prepend(userCard);  //? Изменить на стек
    usernameInput.value = username.textContent.trim();
    userCardNameInput.value = "";
    userCardLinkInput.value = "";
}

editProfileBtn.addEventListener('click', openProfileEditPopup);
formProfileEdit.addEventListener('submit', formProfileEditHandler);
popupProfileEditCloseBtn.addEventListener('click', function (evt) {
    let popupSection = evt.target.parentElement.parentElement;
    closePopup(popupSection);
});

addCardBtn.addEventListener('click', function () {
    openPopup(popupAddCard);
});
formAddCard.addEventListener('submit', formAddCardHandler);
popupAddCardCloseBtn.addEventListener('click', function (evt) {
    let popupSection = evt.target.parentElement.parentElement;
    closePopup(popupSection);
});