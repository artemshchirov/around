export const openPopup = popup => {
  document.addEventListener("keydown", handleKey);
  popup.classList.add("popup_opened");
};

export const closePopup = popup => {
  document.removeEventListener("keydown", handleKey);
  popup.classList.remove("popup_opened");
};

export const handleKey = evt => {
  const popupOpened = document.querySelector(".popup_opened");
  if (popupOpened && evt.key === "Escape") closePopup(popupOpened);
};