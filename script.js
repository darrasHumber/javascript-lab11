// Part 1: Setting Up Classes
class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
  getValue() {
    return this.price * this.quantity;
  }
  toString() {
    retuen`Product: ${this.name}, Price: ${this.price},Quantity: ${this.quantity}`;
  }
}
