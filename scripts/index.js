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

const cardTemplate = document.querySelector('#card').content;


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
    let userCard = cardTemplate.querySelector('.card').cloneNode(true);
    userCard.querySelector('.card__title').textContent = userCardNameInput.value;
    userCard.querySelector('.card__image').src = userCardLinkInput.value;
    cards.prepend(userCard);  //? Изменить на стек
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

const initialCards = [
    {
        name: 'Мордор',
        link: './images/mordor.jpg',
        alt: 'Мордор —  область на юго-востоке Средиземья к востоку от Андуина, владения Саурона',
    },
    {
        name: 'Лотлориэн',
        link: './images/lothlorien.jpg',
        alt: 'Обширный разноцветный лес. Среди деревьев виднеется эльфийский город',
    },
    {
        name: 'Столпы Аргоната',
        link: './images/lotr.jpg',
        alt: 'Столпы Аргоната -  — монумент, состоящий из двух огромной величины статуй, высеченных в скалах и изображающих Исильдура и Анариона, стоящих по обе стороны реки Андуин на северных подходах к Нен Хитоэль.',
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
initialCards.forEach(function(card) {  //? DRY
    let userCard = cardTemplate.querySelector('.card').cloneNode(true);
    userCard.querySelector('.card__title').textContent = card.name;
    userCard.querySelector('.card__image').src = card.link;
    userCard.querySelector('.card__image').alt = card.alt;  //? Почему не отображается?
    cards.prepend(userCard); 
});

function changeLikeStatus(item) {  //? Почему 1й лайк картинки игнорирует 1ю проверку if?
    if (item.style.backgroundImage.includes('like_active.svg')) {
        item.style.backgroundImage = 'url("./images/like_disabled.svg")';
    } else {
        item.style.backgroundImage = 'url("./images/like_active.svg")';
    };
};

const likeBtns = Array.from(document.querySelectorAll('.button_like'));
likeBtns.forEach(function(item) {
    item.addEventListener('click', function () {
        changeLikeStatus(item);
    });
});



