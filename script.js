// Part 1: Setting Up Classes
class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
  //Calculate subtotal
  getValue() {
    return this.price * this.quantity;
  }
  //print the Product in a nice way
  toString() {
    retuen`Product: ${this.name}, Price: ${this.price},Quantity: ${this.quantity}`;
  }
}
