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
    return `Product: ${this.name}, Price: ${this.price},Quantity: ${this.quantity}`;
  }
}

console.log("Test Product Class\n\n");
const galaApple = new Product("Apple", 1.99, 5);
console.log(galaApple.getValue());
console.log(galaApple.toString());

// Part 2: Adding Inheritance
class PerishableProduct extends Product {
  constructor(name, price, quantity, expirationDate) {
    super(name, price, quantity);
    this.expirationDate = expirationDate;
  }
}
