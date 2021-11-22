const editBtn = document.querySelector('.button_profile_edit');
const popupElement = document.querySelector('.popup');
const popupCloseBtn = popupElement.querySelector('.button_form_close');
const profile = document.querySelector('.profile');
const username = profile.querySelector('.profile__name');
const about = profile.querySelector('.profile__about');
const formElement = popupElement.querySelector('.form');
const usernameInput = document.getElementById('name-edit_input_id');
const aboutInput = document.getElementById('about-edit_input_id');

function openEditProfilePopup() {
    usernameInput.value = username.textContent.trim();
    aboutInput.value = about.textContent.trim();
    popupElement.classList.add('popup_opened');
}
const closeEditProfilePopup = () => {
    popupElement.classList.remove('popup_opened');
}
function formSubmitHandler(evt) {
    evt.preventDefault();
    username.textContent = usernameInput.value; 
    about.textContent = aboutInput.value;
    closeEditProfilePopup();
}

editBtn.addEventListener('click', openEditProfilePopup);
popupCloseBtn.addEventListener('click', closeEditProfilePopup);
formElement.addEventListener('submit', formSubmitHandler); 