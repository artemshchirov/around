const editProfileBtn = document.querySelector('.button_profile_edit');
const popupProfileEdit = document.querySelector('.popup-profile-edit');
const formProfileEdit = popupProfileEdit.querySelector('.form');
const profile = document.querySelector('.profile');
const username = profile.querySelector('.profile__name');
const about = profile.querySelector('.profile__about');
const usernameInput = document.getElementById('name-edit_input_id');
const aboutInput = document.getElementById('about-edit_input_id');
const popupAddCard = document.querySelector('.popup_card-add');
const formAddCard = popupAddCard.querySelector('.form')
const addCardBtn = document.querySelector('.button_profile_add');
const newCardNameInput = document.getElementById('name-card_input_id');
const newCardLinkInput = document.getElementById('link-card_input_id');
const cards = document.querySelector('.cards');
const cardTemplate = document.querySelector('#card').content;
const popupCardFullscreen = document.querySelector('.popup_card-fullscreen');
const initialCards = [
    {
        name: 'Мордор',
        link: './images/mordor.jpg',
        alt: 'Мордор — область на юго-востоке Средиземья к востоку от Андуина, владения Саурона',
    },
    {
        name: 'Лотлориэн',
        link: './images/lothlorien.jpg',
        alt: 'Обширный разноцветный лес. Среди деревьев виднеется эльфийский город',
    },
    {
        name: 'Столпы Аргоната',
        link: './images/lotr.jpg',
        alt: 'Столпы Аргоната - — монумент, состоящий из двух огромной величины статуй, высеченных в скалах и изображающих Исильдура и Анариона, стоящих по обе стороны реки Андуин на северных подходах к Нен Хитоэль.',
    },
    {
        name: 'г. Мория',
        link: './images/moria.jpeg',
        alt: 'гора Мория - большая пещера с каменным мостом над бездной',
    },
    {
        name: 'Ривенделл',
        link: './images/rivendell.jpg',
        alt: 'Ривенделл - эльфийский город с высокими белыми башнями в горах, покрытых лесом',
    },
    {
        name: 'Шир',
        link: './images/shire.jpg',
        alt: 'Шир - деревня хоббитов с обустроенные домами-норами внутри холмов',
    },
];

const renderCards = arr => {
    arr.forEach(card => {
        let newCard = cardTemplate.querySelector('.card').cloneNode(true);
        newCard.querySelector('.card__title').textContent = card.name;
        newCard.querySelector('.card__image').src = card.link;
        newCard.querySelector('.card__image').alt = card.alt;
        cards.prepend(newCard);
    });
}
const closePopup = popup => popup.classList.remove('popup_opened');
const openPopup = popup => {
    popup.classList.add('popup_opened');
    if (!popup.classList.contains('popup_smoothly')) {
        popup.classList.add('popup_smoothly');
    };
}
const fillInputsUserData = () => {
    usernameInput.value = username.textContent.trim();
    aboutInput.value = about.textContent.trim();
}
const openProfileEditPopup = () => {
    openPopup(popupProfileEdit);
    fillInputsUserData();
}
const refreshProfile = () => {
    username.textContent = usernameInput.value;
    about.textContent = aboutInput.value;
}
const formProfileEditHandler = evt => {
    evt.preventDefault();
    refreshProfile();
    closePopup(evt.target.closest('.popup_opened'));
}
const formAddCardHandler = evt => {
    evt.preventDefault();
    addCard();
    closePopup(evt.target.closest('.popup_opened'));
}
const addCard = () => {
    let newCard = cardTemplate.querySelector('.card').cloneNode(true);
    let likeBtn = newCard.querySelector('.button_like');
    let deleteBtn = newCard.querySelector('.button_card_delete');
    newCard.querySelector('.card__title').textContent = newCardNameInput.value;
    newCard.querySelector('.card__image').src = newCardLinkInput.value;
    newCard.querySelector('.card__image').alt = `Картинка пользователя: ${newCard.textContent.trim()}`;
    cards.prepend(newCard);
    newCardNameInput.value = "";
    newCardLinkInput.value = "";
    newCard.querySelector('.card__image').addEventListener('click', evt => openCardFullscreen(evt.target.closest('.card')));
    likeBtn.addEventListener('click', () => changeLikeStatus(likeBtn));
    deleteBtn.addEventListener('click', evt => deleteCard(evt.target.closest('.card')));

}
const changeLikeStatus = item => {
    if (item.style.backgroundImage.includes('like_active.svg')) {
        item.style.backgroundImage = 'url("./images/like_disabled.svg")';
    } else {
        item.style.backgroundImage = 'url("./images/like_active.svg")';
    };
};
const deleteCard = evt => {
    evt.remove();
}
const openCardFullscreen = (evt) => {
    popupCardFullscreen.querySelector('.popup__image').src = evt.querySelector('.card__image').src;
    popupCardFullscreen.querySelector('.popup__title').textContent = evt.textContent;
    openPopup(popupCardFullscreen);
}

renderCards(initialCards);
const likeBtns = Array.from(document.querySelectorAll('.button_like'));
const deleteCardBtns = Array.from(document.querySelectorAll('.button_card_delete'));
const cardImages = Array.from(document.querySelectorAll('.card__image'));
const popupCloseBtn = Array.from(document.querySelectorAll('.button_popup_close, .popup__image'));
likeBtns.forEach(item => item.addEventListener('click', () => changeLikeStatus(item)));
deleteCardBtns.forEach(item => item.addEventListener('click', evt => deleteCard(evt.target.closest('.card'))));
cardImages.forEach(item => item.addEventListener('click', evt => openCardFullscreen(evt.target.closest('.card'))));
popupCloseBtn.forEach(item => item.addEventListener('click', evt => closePopup(evt.target.closest('.popup_opened'))));
editProfileBtn.addEventListener('click', openProfileEditPopup);
addCardBtn.addEventListener('click', () => openPopup(popupAddCard));
formProfileEdit.addEventListener('submit', formProfileEditHandler);
formAddCard.addEventListener('submit', formAddCardHandler);
