const editProfileBtn = document.querySelector('.button_profile_edit');
const popupProfileEdit = document.querySelector('.popup-profile-edit');
const popupProfileEditCloseBtn = popupProfileEdit.querySelector('.button_form_close');
const formProfileEdit = popupProfileEdit.querySelector('.form');
const profile = document.querySelector('.profile');
const username = profile.querySelector('.profile__name');
const about = profile.querySelector('.profile__about');
const usernameInput = document.getElementById('name-edit_input_id');
const aboutInput = document.getElementById('about-edit_input_id');
const popupAddCard = document.querySelector('.popup_card-add');
const formAddCard = popupAddCard.querySelector('.form')
const popupAddCardCloseBtn = popupAddCard.querySelector('.button_form_close');
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

const renderInitialCards = () => {
    initialCards.forEach(card => {
        let newCard = cardTemplate.querySelector('.card').cloneNode(true);
        newCard.querySelector('.card__title').textContent = card.name;
        newCard.querySelector('.card__image').src = card.link;
        newCard.querySelector('.card__image').alt = card.alt;
        cards.prepend(newCard);
    });
}

const openPopup = popup => {
    popup.classList.add('popup_opened');
    if (!popup.classList.contains('popup_smoothly')) {
        popup.classList.add('popup_smoothly');
    };  // иначе попап откроется при загрузке страницы
}
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
    let popupSection = evt.target.parentElement.parentElement;
    closePopup(popupSection);
}
const formAddCardHandler = evt => {
    evt.preventDefault();
    addCard();
    let popupSection = evt.target.parentElement.parentElement;
    console.log(popupSection);
    closePopup(popupSection);
}
const addCard = () => {
    let newCard = cardTemplate.querySelector('.card').cloneNode(true);
    newCard.querySelector('.card__title').textContent = newCardNameInput.value;
    newCard.querySelector('.card__image').src = newCardLinkInput.value;
    newCard.querySelector('.card__image').alt = "Картинка пользователя";
    likeBtn = newCard.querySelector('.button_like');
    deleteBtn = newCard.querySelector('.button_card_delete');
    newCard.querySelector('.card__image').addEventListener('click', evt => openCardFullscreen(evt))
    cards.prepend(newCard);
    likeBtn.addEventListener('click', () => changeLikeStatus(likeBtn));
    deleteBtn.addEventListener('click', evt => deleteCard(evt));
    newCard.querySelector('.card__image').addEventListener('click', evt => openCardFullscreen(evt));
    newCardNameInput.value = "";
    newCardLinkInput.value = "";
}
const changeLikeStatus = item => {
    if (item.style.backgroundImage.includes('like_active.svg')) {
        item.style.backgroundImage = 'url("./images/like_disabled.svg")';
    } else {
        item.style.backgroundImage = 'url("./images/like_active.svg")';
    };
};

const deleteCard = evt => {
    evt.target.parentElement.remove();
}


const openCardFullscreen = evt => {
    console.log(evt.target);
    let card = evt.target;
    popupCardFullscreen.querySelector('.popup__image').src = card.src;
    popupCardFullscreen.querySelector('.popup__title').textContent = card.textContent;
    openPopup(popupCardFullscreen);
    popupCardFullscreen.querySelector('.popup__image').addEventListener('click', evt => closePopup(popupCardFullscreen));
    popupCardFullscreen.querySelector('.button_form_close').addEventListener('click', evt => closePopup(popupCardFullscreen));
}

renderInitialCards(initialCards);
const likeBtns = Array.from(document.querySelectorAll('.button_like'));
const deleteCardBtns = Array.from(document.querySelectorAll('.button_card_delete'));
const cardImages = Array.from(document.querySelectorAll('.card__image'));
console.log(cardImages);
cardImages.forEach(item => item.addEventListener('click', evt => openCardFullscreen(evt)));

likeBtns.forEach(item => item.addEventListener('click', () => changeLikeStatus(item)));
deleteCardBtns.forEach(item => item.addEventListener('click', evt => deleteCard(evt)));
editProfileBtn.addEventListener('click', openProfileEditPopup);
addCardBtn.addEventListener('click', () => openPopup(popupAddCard));
formProfileEdit.addEventListener('submit', formProfileEditHandler);
formAddCard.addEventListener('submit', formAddCardHandler);
popupProfileEditCloseBtn.addEventListener('click', evt => closePopup(evt.target.parentElement.parentElement));
popupAddCardCloseBtn.addEventListener('click', evt => closePopup(evt.target.parentElement.parentElement));
