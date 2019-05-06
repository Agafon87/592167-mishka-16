// Переменные
const modalBasket = document.querySelector(`.modal-basket`);
const orderButtons = document.querySelectorAll(`.button-order`);
const addButton = document.querySelector(`.modal-basket__button`);
const modalOverlay = document.querySelector(`.modal-baskte__overlay`);
const modalMain = document.querySelector(`.modal-basket__main`);
const mobileMenuButton = document.querySelector(`.header__button`);
const menuListElements = document.querySelectorAll(`.header__list-item:not(:first-child)`);
const orderSubmit = document.querySelector(`.order__button`);
const personName = document.querySelector(`#person-name`);
const personSname = document.querySelector(`#person-sname`);
const personPhone = document.querySelector(`#person-phone`);
const personEmail = document.querySelector(`#person-email`);

// Функции
const isValid = (elements) => {
  for (const i of elements) {
    if (!i.validity.valid) {
      i.classList.add(`order__error`);
    } else {
      i.classList.remove(`order__error`);
    }
  }
}


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

if (addButton) {
  addButton.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    modalBasket.classList.add("invisible-block");
  });
}

if (document.documentElement.clientWidth < 768) {
  mobileMenuButton.classList.remove(`invisible-block`);
  for (const i of menuListElements) {
    i.classList.add(`invisible-block`);
  }

  mobileMenuButton.addEventListener(`click`, () => {
    if (mobileMenuButton.classList.contains(`header__button--open`)) {
      for (const i of menuListElements) {
        i.classList.remove(`invisible-block`);
      }
      mobileMenuButton.classList.remove(`header__button--open`);
      mobileMenuButton.classList.add(`header__button--close`);
    } else {
      for (const i of menuListElements) {
        i.classList.add(`invisible-block`);
      }
      mobileMenuButton.classList.remove(`header__button--close`);
      mobileMenuButton.classList.add(`header__button--open`);
    }
  });
}

if (orderSubmit) {
  orderSubmit.addEventListener(`click`, () => {
    isValid([personName, personSname, personPhone, personEmail]);
  })
}
