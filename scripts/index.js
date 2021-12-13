const editProfileBtn = document.querySelector('.button_profile_edit');
const popupProfileEdit = document.querySelector('.popup-profile-edit');
const formProfileEdit = popupProfileEdit.querySelector('.form');
const profile = document.querySelector('.profile');
const username = profile.querySelector('.profile__name');
const about = profile.querySelector('.profile__about');
const usernameInput = document.getElementById('name-edit');
const aboutInput = document.getElementById('about-edit');
const popupAddCard = document.querySelector('.popup_card-add');
const formAddCard = popupAddCard.querySelector('.form')
const addCardBtn = document.querySelector('.button_profile_add');
const newCardNameInput = document.getElementById('name-card');
const newCardLinkInput = document.getElementById('link-card');
const cards = document.querySelector('.cards');
const cardTemplate = document.querySelector('#card').content;
const popupCardFullscreen = document.querySelector('.popup_card-fullscreen');
const popupCloseBtns = Array.from(document.querySelectorAll('.button_popup_close'));
const popupOverlays = Array.from(document.querySelectorAll('.popup__overlay'));
const popups = Array.from(document.querySelectorAll('.popup'));
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
        alt: 'Шир - деревня хоббитов с об   устроенные домами-норами внутри холмов',
    },
];

const openPopup = popup => popup.classList.add('popup_opened');
const closePopup = popup => popup.classList.remove('popup_opened');
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
    addCard(newCardNameInput.value, newCardLinkInput.value);
    closePopup(evt.target.closest('.popup_opened'));
    newCardNameInput.value = "";
    newCardLinkInput.value = "";
}
const addCard = (title, src) => {
    const newCard = createCard({ name: title, link: src });
    cards.prepend(newCard);
}
const changeLikeStatus = item => {
    if (item.style.backgroundImage.includes('like_active.svg')) {
        item.style.backgroundImage = 'url("./images/like_disabled.svg")';
    } else {
        item.style.backgroundImage = 'url("./images/like_active.svg")';
    };
}
const deleteCard = evt => {
    evt.target.closest('.card').remove();
}
const openCardFullscreen = evt => {
    eventCard = evt.target.closest('.card');
    popupCardFullscreen.querySelector('.popup__image').src = eventCard.querySelector('.card__image').src;
    popupCardFullscreen.querySelector('.popup__image').alt = eventCard.querySelector('.card__image').alt;
    popupCardFullscreen.querySelector('.popup__title').textContent = evt.textContent;
    openPopup(popupCardFullscreen);
}
const createCard = card => {
    const cardElem = cardTemplate.querySelector('.card').cloneNode(true);
    const cardTitle = cardElem.querySelector('.card__title');
    const cardImage = cardElem.querySelector('.card__image');
    const deleteBtn = cardElem.querySelector('.button_card_delete');
    const likeBtn = cardElem.querySelector('.button_like');
    cardTitle.textContent = card.name;
    cardImage.src = card.link;
    cardImage.alt = `Картинка пользователя: ${cardElem.textContent.trim()}`;
    cardImage.addEventListener('click', openCardFullscreen);
    deleteBtn.addEventListener('click', deleteCard);
    likeBtn.addEventListener('click', () => changeLikeStatus(likeBtn));
    return cardElem;
}
const handleKey = evt => {
    const popupOpened = document.querySelector('.popup_opened');
    if (popupOpened && evt.key === "Escape") closePopup(popupOpened);
}

fillInputsUserData();

document.addEventListener('keydown', handleKey);
editProfileBtn.addEventListener('click', openProfileEditPopup);
addCardBtn.addEventListener('click', () => openPopup(popupAddCard));
formProfileEdit.addEventListener('submit', formProfileEditHandler);
formAddCard.addEventListener('submit', formAddCardHandler);
initialCards.forEach(card => cards.prepend(createCard(card)));
popupCloseBtns.forEach(btn => btn.addEventListener('click', evt => closePopup(evt.target.closest('.popup_opened'))));
popupOverlays.forEach(overlay => overlay.addEventListener('click', evt => closePopup(evt.target.closest('.popup_opened'))));