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
  // Part 3: Static Methods and Properties
  // Static method to apply discount to an array of products
  static applyDiscount(products, discount) {
    // Validate inputs
    if (!Array.isArray(products)) {
      throw new Error("First argument must be an array of products");
    }
    if (typeof discount !== "number" || discount < 0 || discount > 1) {
      throw new Error("Discount must be a number between 0 and 1");
    }

    // Apply discount to each product
    return products.map((product) => {
      // Verify each item is a Product or PerishableProduct instance
      if (!(product instanceof Product)) {
        throw new Error("Array contains non-product items");
      }

      // Create a new object to avoid mutating the original
      const discountedProduct = {
        ...product,
        price: product.price * (1 - discount), // Apply discount
        originalPrice: product.price, // Store original price
      };

      return discountedProduct;
    });
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

//Part 4: Store Management
class Store {
  constructor() {
    this.inventory = [];
  }
}
