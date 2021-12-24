import { Card } from "./Card.js";
import { disableButton } from "./validation.js"
import { validationObj } from "./validation.js"

const editProfileBtn = document.querySelector(".button_profile_edit");
const popupProfileEdit = document.querySelector(".popup-profile-edit");
const formProfileEdit = popupProfileEdit.querySelector(".form");
const profile = document.querySelector(".profile");
const username = profile.querySelector(".profile__name");
const about = profile.querySelector(".profile__about");
const usernameInput = document.getElementById("name-edit");
const aboutInput = document.getElementById("about-edit");
const popupAddCard = document.querySelector(".popup_card-add");
const formAddCard = popupAddCard.querySelector(".form");
const createCardButton = formAddCard.querySelector(".button_form_submit");
const addCardBtn = document.querySelector(".button_profile_add");
const newCardNameInput = document.getElementById("name-card");
const newCardLinkInput = document.getElementById("link-card");
const cards = document.querySelector(".cards");
const popupCloseBtns = Array.from(
  document.querySelectorAll(".button_popup_close")
);
const popupOverlays = Array.from(document.querySelectorAll(".popup__overlay"));
const popups = Array.from(document.querySelectorAll(".popup"));
const initialCards = [
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

const handleKey = (evt) => {
  const popupOpened = document.querySelector(".popup_opened");
  if (popupOpened && evt.key === "Escape") closePopup(popupOpened);
};
const openPopup = (popup) => {
  document.addEventListener("keydown", handleKey);
  popup.classList.add("popup_opened");
};
const closePopup = (popup) => {
  document.removeEventListener("keydown", handleKey);
  popup.classList.remove("popup_opened");
};
const fillInputsUserData = () => {
  usernameInput.value = username.textContent.trim();
  aboutInput.value = about.textContent.trim();
};
const openProfileEditPopup = () => {
  fillInputsUserData();
  openPopup(popupProfileEdit);
};
const updateProfile = () => {
  username.textContent = usernameInput.value;
  about.textContent = aboutInput.value;
};
const formProfileEditHandler = () => {
  updateProfile();
  closePopup(popupProfileEdit);
};
const formAddCardHandler = () => {
  const newCardObj = {
    name: newCardNameInput.value,
    link: newCardLinkInput.value,
    alt: `Картинка пользователя: "${newCardNameInput.value}"`,
  };
  addCard(newCardObj, 'card');
  closePopup(popupAddCard);
  formAddCard.reset();
  disableButton(createCardButton, validationObj.inactiveButtonClass);
};

const addCard = (obj, selector) => {
  const card = new Card(obj, selector);
  const cardElement = card.generateCard();
  cards.prepend(cardElement);
}

editProfileBtn.addEventListener("click", openProfileEditPopup);
addCardBtn.addEventListener("click", () => openPopup(popupAddCard));
formProfileEdit.addEventListener("submit", formProfileEditHandler);
formAddCard.addEventListener("submit", formAddCardHandler);
initialCards.forEach((obj) => addCard(obj, 'card'));
popupCloseBtns.forEach((btn) =>
  btn.addEventListener("click", (evt) =>
    closePopup(evt.target.closest(".popup_opened"))
  )
);
popupOverlays.forEach((overlay) =>
  overlay.addEventListener("click", (evt) =>
    closePopup(evt.target.closest(".popup_opened"))
  )
);
