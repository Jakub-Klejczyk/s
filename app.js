const btn = document.querySelector("#button");
const del = document.querySelector("#del");
const num = document.querySelector("#number");
const basket = document.querySelector("#basket");
const div = document.querySelector("#div");
const ppp = document.querySelector("#ppp");

class Product {
  constructor(name, price, number) {
    this.name = name;
    this.price = price;
    this.number = number;
    this.totalPrice = price * number;
  }
  addItem() {
    this.number++;
    num.textContent = this.number;
  }
  removeItem() {
    this.number--;
    num.textContent = this.number;
  }
}

const vipera = new Product("Vipera kaznakovi", 5, 0);
const { name, price, number, totalPrice } = vipera;
ppp.textContent = price;

btn.addEventListener("click", () => {
  vipera.addItem();
});

del.addEventListener("click", () => {
  if (productsInBasket > 0) {
    vipera.removeItem();
  }
});

basket.addEventListener("click", () => {
  div.classList.toggle("bum");
});
