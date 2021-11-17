// open, close popup
const editBtn = document.querySelector('.profile__edit-btn');
const popupElement = document.querySelector('.popup');
const popupCloseBtn = popupElement.querySelector('.popup__close');
const popupOverlay = popupElement.querySelector('.popup__overlay');

function open() {
    popupElement.classList.add('popup_opened');
}

const close = () => {
    popupElement.classList.remove('popup_opened');
}

editBtn.addEventListener('click', open);
popupCloseBtn.addEventListener('click', close);
popupOverlay.addEventListener('click', close);

// save inputs and close popup
const profile = document.querySelector('.profile');
let username = profile.querySelector('.profile__name');
let about = profile.querySelector('.profile__about');

let formElement = popupElement.querySelector('.form');
let usernameInput = formElement.querySelectorAll('.form__input')[0];
let aboutInput = formElement.querySelectorAll('.form__input')[1];

function save(evt) {
    evt.preventDefault();
    console.log('save');
    username.textContent = usernameInput.value; 
    about.textContent = aboutInput.value;
    close();
}

formElement.addEventListener('submit', save); 