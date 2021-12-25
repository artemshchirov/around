export const editProfileBtn = document.querySelector(".button_profile_edit");
export const popupProfileEdit = document.querySelector(".popup-profile-edit");
export const formProfileEdit = popupProfileEdit.querySelector(".form");
export const profile = document.querySelector(".profile");
export const username = profile.querySelector(".profile__name");
export const about = profile.querySelector(".profile__about");
export const usernameInput = document.getElementById("name-edit");
export const aboutInput = document.getElementById("about-edit");
export const popupAddCard = document.querySelector(".popup_card-add");
export const formAddCard = popupAddCard.querySelector(".form");
export const createCardButton = formAddCard.querySelector(".button_form_submit");
export const addCardBtn = document.querySelector(".button_profile_add");
export const newCardNameInput = document.getElementById("name-card");
export const newCardLinkInput = document.getElementById("link-card");
export const cards = document.querySelector(".cards");
export const popupCloseBtns = Array.from(document.querySelectorAll(".button_popup_close"));
export const popupOverlays = Array.from(document.querySelectorAll(".popup__overlay"));
export const validationForms = Array.from(document.querySelectorAll('.form'));
export const popupFullscreen = document.querySelector('.popup_card-fullscreen');
export const validationObj = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.button_form_submit',
    inactiveButtonClass: 'button_disabled',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__input-error_visible'
}
export const initialCards = [
  {
    name: "Мордор",
    link: "./images/mordor.jpg",
    alt: "Мордор — область на юго-востоке Средиземья к востоку от Андуина, владения Саурона",
  },
  {
    name: "Лотлориэн",
    link: "./images/lothlorien.jpg",
    alt: "Обширный разноцветный лес. Среди деревьев виднеется эльфийский город",
  },
  {
    name: "Столпы Аргоната",
    link: "./images/lotr.jpg",
    alt: "Столпы Аргоната - — монумент, состоящий из двух огромной величины статуй, высеченных в скалах и изображающих Исильдура и Анариона, стоящих по обе стороны реки Андуин на северных подходах к Нен Хитоэль.",
  },
  {
    name: "г. Мория",
    link: "./images/moria.jpeg",
    alt: "гора Мория - большая пещера с каменным мостом над бездной",
  },
  {
    name: "Ривенделл",
    link: "./images/rivendell.jpg",
    alt: "Ривенделл - эльфийский город с высокими белыми башнями в горах, покрытых лесом",
  },
  {
    name: "Шир",
    link: "./images/shire.jpg",
    alt: "Шир - деревня хоббитов с обустроенными домами-норами внутри холмов",
  },
];
