import { handleKey } from "./index.js";

export const openPopup = popup => {
  document.addEventListener("keydown", handleKey);
  popup.classList.add("popup_opened");
};

export const closePopup = popup => {
  document.removeEventListener("keydown", handleKey);
  popup.classList.remove("popup_opened");
};