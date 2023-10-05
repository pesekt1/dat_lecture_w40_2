//webshop

//Product
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getTotalPrice(quantity) {
    return this.price * quantity;
  }

  getLabel() {
    return this.name;
  }
}

//Book
class Book extends Product {
  constructor(name, price, author, pages) {
    super(name, price);
    this.author = author;
    this.pages = pages;
  }

  getLabel() {
    return `${this.name} by ${this.author}`;
  }
}

//Electrics
class Electrics extends Product {
  constructor(name, price, brand, model) {
    super(name, price);
    this.brand = brand;
    this.model = model;
  }

  getLabel() {
    return `${this.brand} ${this.model} ${this.name}`;
  }
}

class Clothing extends Product {
  constructor(name, price, color, size) {
    super(name, price);
    this.size = size;
    this.color = color;
  }

  getLabel() {
    return `${this.name} ${this.size} ${this.color}`;
  }
}

class Webshop {
  #products;
  constructor() {
    this.#products = [];
  }

  addProduct(product) {
    this.#products.push(product);
  }

  getProducts() {
    return this.#products;
  }

  getTotalPrice() {
    return this.#products.reduce((acc, product) => acc + product.price, 0);
  }

  getProductsByType(type) {
    return this.#products.filter((product) => product instanceof type);
  }
}

const webshop = new Webshop();
const book = new Book("book", 10, "john", 253);
const electrics = new Electrics("tv", 100, "samsung", "samsung 1");
const clothing = new Clothing("shirt", 10, "blue", "M");
webshop.addProduct(book);
webshop.addProduct(electrics);
webshop.addProduct(clothing);

console.log(webshop.getProductsByType(Book));
console.log(webshop.getProductsByType(Electrics));
console.log(webshop.getProductsByType(Clothing));

console.log(webshop.getTotalPrice());
