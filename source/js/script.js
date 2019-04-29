const modalBasket = document.querySelector(`.modal-basket`);
const orderButton = document.querySelector(`.button-order`);
const addButton = document.querySelector(`.modal-basket__button`);
const modalOverlay = document.querySelector(`.modal-baskte__overlay`);
const modalMain = document.querySelector(`.modal-basket__main`);

orderButton.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  modalBasket.classList.remove("invisible-block");
  modalBasket.style.width = document.documentElement.scrollWidth + `px`;
  modalOverlay.style.width = document.documentElement.scrollWidth + `px`;
  modalOverlay.style.height = document.documentElement.scrollHeight + `px`;

  modalMain.style.top = (window.pageYOffset + (document.documentElement.clientHeight / 2) - 168) + `px`;

  if (document.documentElement.clientWidth < 768) {
    modalMain.style.left = (window.pageXOffset + (document.documentElement.clientWidth / 2) - 160) + `px`;
  } else {
    modalMain.style.left = (window.pageXOffset + (document.documentElement.clientWidth / 2) - 283) + `px`;
  }
});

addButton.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  modalBasket.classList.add("invisible-block");
});
