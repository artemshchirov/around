import mordorImage from '../images/mordor.jpg';
import lotlorienImage from '../images/lothlorien.jpg';
import argonathImage from '../images/lotr.jpg';
import moriaImage from '../images/moria.jpeg';
import rivendellImage from '../images/rivendell.jpg';
import shireImage from '../images/shire.jpg';

export const formAddCard = document.querySelector(".popup_card-add").querySelector(".form");
export const formProfileEdit = document.querySelector(".popup-profile-edit").querySelector(".form");
export const addCardBtn = document.querySelector(".button_profile_add");
export const editProfileBtn = document.querySelector(".button_profile_edit");
export const usernameInput = document.getElementById("name-edit");
export const aboutInput = document.getElementById("about-edit");
export const validationObj = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.button_form_submit',
    inactiveButtonClass: 'button_disabled',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__input-error_visible'
};
export const initialCards = [
    {
        name: "Мордор",
        src: mordorImage,
        alt: "Мордор — область на юго-востоке Средиземья к востоку от Андуина, владения Саурона",
    },
    {
        name: "Лотлориэн",
        src: lotlorienImage,
        alt: "Обширный разноцветный лес. Среди деревьев виднеется эльфийский город",
    },
    {
        name: "Столпы Аргоната",
        src: argonathImage,
        alt: "Столпы Аргоната - — монумент, состоящий из двух огромной величины статуй, высеченных в скалах и изображающих Исильдура и Анариона, стоящих по обе стороны реки Андуин на северных подходах к Нен Хитоэль.",
    },
    {
        name: "г. Мория",
        src: moriaImage,
        alt: "гора Мория - большая пещера с каменным мостом над бездной",
    },
    {
        name: "Ривенделл",
        src: rivendellImage,
        alt: "Ривенделл - эльфийский город с высокими белыми башнями в горах, покрытых лесом",
    },
    {
        name: "Шир",
        src: shireImage,
        alt: "Шир - деревня хоббитов с обустроенными домами-норами внутри холмов",
    },
];