const modalBasket = document.querySelector(`.modal-basket`);
const featuredButton = document.querySelector(`.featured__button`);
const addButton = document.querySelector(`.modal-basket__add`);
const modalOverlay = document.querySelector(`.modal-baskte__overlay`);
const modalMain = document.querySelector(`.modal-basket__main`);

featuredButton.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  modalBasket.classList.remove("invisible-block");
  modalOverlay.style.width = `320px`;
  modalOverlay.style.height = document.documentElement.scrollHeight + `px`;

  modalMain.style.top = (window.pageYOffset + (document.documentElement.clientHeight / 2) - 168) + `px`;
  modalMain.style.left = (window.pageXOffset + (document.documentElement.clientWidth / 2) - 160) + `px`;
});

addButton.addEventListener(`click`, () => {
  modalBasket.classList.add("invisible-block");
});
