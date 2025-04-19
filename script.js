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
    return `Product: ${this.name}, Price: $${this.price},Quantity: ${this.quantity}`;
  }
}

console.log("Test Product Class\n\n");
const galaApple = new Product("Apple", 1.99, 5);

console.log(galaApple.toString());
console.log(
  `${galaApple.name} subtotal is $${galaApple.getValue().toFixed(2)}`
);

// Part 2: Adding Inheritance
class PerishableProduct extends Product {
  constructor(name, price, quantity, expirationDate) {
    super(name, price, quantity);
    this.expirationDate = expirationDate;
  }
  toString() {
    return `Product: ${this.name}, Price: $${this.price},Quantity: ${this.quantity}, Expiry Date: ${this.expirationDate}`;
  }
}

// Test PerishableProduc class
const milk = new PerishableProduct("Milk", 6.99, 2, "20=04-2025");
const bread = new PerishableProduct("bread", 2.99, 3, "28=04-2025");
console.log("\nTest PerishableProduct class\n\n");
console.log(milk.toString());
console.log(`${milk.name} subtotal is $${milk.getValue().toFixed(2)}`);
console.log(bread.toString());
console.log(`${bread.name} subtotal is $${bread.getValue().toFixed(2)}`);
