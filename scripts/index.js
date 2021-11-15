console.log('loaded');

const editBtn = document.querySelector('.profile__edit-btn');
console.log(editBtn);

const popup = document.querySelector('.popup');
console.log(popup);

const popupCloseBtn = popup.querySelector('.popup__close');
console.log(popupCloseBtn);


function open() {
    popup.classList.add('.popup_opened');
}

const close = () => {
    popup.classList.remove('.popup_opened');
}

editBtn.addEventListener('click', open);
popupCloseBtn.addEventListener('click', close);
