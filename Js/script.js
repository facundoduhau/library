const newBookButton = document.querySelector("#newBookButton");
const popup = document.querySelector("#popup");
const closePopupButton = document.querySelector("#closePopupButton");

newBookButton.addEventListener("click", () => {
  popup.classList.add("popup-toggled");
});

closePopupButton.addEventListener("click", () => {
  popup.classList.remove("popup-toggled");
});
