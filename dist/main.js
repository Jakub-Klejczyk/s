/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var btn = document.querySelector("#button");
var del = document.querySelector("#del");
var num = document.querySelector("#number");
var basket = document.querySelector("#basket");
var div = document.querySelector("#div");
var ppp = document.querySelector("#ppp");

var Product = /*#__PURE__*/function () {
  function Product(name, price, number) {
    _classCallCheck(this, Product);

    this.name = name;
    this.price = price;
    this.number = number;
    this.totalPrice = price * number;
  }

  _createClass(Product, [{
    key: "addItem",
    value: function addItem() {
      this.number++;
      num.textContent = this.number;
    }
  }, {
    key: "removeItem",
    value: function removeItem() {
      this.number--;
      num.textContent = this.number;
    }
  }]);

  return Product;
}();

var vipera = new Product("Vipera kaznakovi", 5, 0);
var name = vipera.name,
    price = vipera.price,
    number = vipera.number,
    totalPrice = vipera.totalPrice;
ppp.textContent = price;
btn.addEventListener("click", function () {
  vipera.addItem();
});
del.addEventListener("click", function () {
  if (vipera.number > 0) {
    vipera.removeItem();
  }
});
basket.addEventListener("click", function () {
  div.classList.toggle("bum");
});
/******/ })()
;
//# sourceMappingURL=main.js.map