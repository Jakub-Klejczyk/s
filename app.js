const btn = document.querySelector("#button");
const del = document.querySelector("#del");
const num = document.querySelector("#number");
const basket = document.querySelector("#basket");
const div = document.querySelector("#div");

let productsInBasket = 0;

btn.addEventListener("click", () => {
  productsInBasket++;
  num.textContent = productsInBasket;
});

del.addEventListener("click", () => {
  if (productsInBasket > 0) {
    productsInBasket--;
    num.textContent = productsInBasket;
  }
});

basket.addEventListener("click", () => {
  div.classList.toggle("bum");
});
