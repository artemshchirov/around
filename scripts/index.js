console.log('loaded');
const editBtn = document.querySelector('.profile__edit-btn');
const popup = document.querySelector('.popup');
const popupCloseBtn = popup.querySelector('.popup__close');
const popupOverlay = popup.querySelector('.popup__overlay');

function open() {
    popup.classList.add('popup_opened');
}

const close = () => {
    popup.classList.remove('popup_opened');
}

editBtn.addEventListener('click', open);
popupCloseBtn.addEventListener('click', close);
popupOverlay.addEventListener('click', close);
