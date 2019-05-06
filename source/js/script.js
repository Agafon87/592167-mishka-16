const modalBasket = document.querySelector(`.modal-basket`);
const orderButtons = document.querySelectorAll(`.button-order`);
const addButton = document.querySelector(`.modal-basket__button`);
const modalOverlay = document.querySelector(`.modal-baskte__overlay`);
const modalMain = document.querySelector(`.modal-basket__main`);
const mobileMenuButton = document.querySelector(`.header__button`);

for (const button of orderButtons) {
  button.addEventListener(`click`, function (evt) {
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
}

addButton.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  modalBasket.classList.add("invisible-block");
});

mobileMenuButton.classList.remove(`invisible-block`);
