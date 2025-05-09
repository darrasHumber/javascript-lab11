// Part 1: Setting Up Classes
/**
 * Represents a basic product with name, price, and quantity
 * @class
 */
class Product {
  /**
   * Creates a Product instance
   * @constructor
   * @param {string} name - The product name
   * @param {number} price - The product price (must be positive)
   * @param {number} quantity - The quantity in stock (must be non-negative)
   */
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
  /**
   * Calculates the total value of the product (price × quantity)
   * @returns {number} The total value
   */
  getValue() {
    return this.price * this.quantity;
  }
  /**
   * Returns a formatted string representation of the product
   * @returns {string} Formatted product information
   */
  toString() {
    return `Product: ${this.name}, Price: $${this.price.toFixed(2)},Quantity: ${
      this.quantity
    }`;
  }
  // Part 3: Static Methods and Properties
  /**
   * Applies discount to an array of products
   * @static
   * @param {Array<Product|PerishableProduct>} products - Array of products to discount
   * @param {number} discount - Discount percentage (0-1)
   * @returns {Array<Product|PerishableProduct>} New array with discounted products
   * @throws {Error} If invalid inputs are provided
   */
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
      // Create a new instance of the same class as the original product
      let discountedProduct;

      if (product instanceof PerishableProduct) {
        discountedProduct = new PerishableProduct(
          product.name,
          product.price * (1 - discount), // Apply discount
          product.quantity,
          product.expirationDate
        );
        discountedProduct.originalPrice = product.price; // Store original price
      } else {
        discountedProduct = new Product(
          product.name,
          product.price * (1 - discount), // Apply discount
          product.quantity
        );
        discountedProduct.originalPrice = product.price; // Store original price
      }

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
/**
 * Represents a perishable product that extends Product with expiration date
 * @class
 * @extends Product
 */
class PerishableProduct extends Product {
  /**
   * Creates a PerishableProduct instance
   * @constructor
   * @param {string} name - The product name
   * @param {number} price - The product price
   * @param {number} quantity - The quantity in stock
   * @param {string} expirationDate - The expiration date (format: YYYY-MM-DD)
   */
  constructor(name, price, quantity, expirationDate) {
    super(name, price, quantity);
    this.expirationDate = expirationDate;
  }
  /**
   * Returns a formatted string representation including expiration date
   * @override
   * @returns {string} Formatted product information with expiry
   */
  toString() {
    return `Product: ${this.name}, Price: $${this.price.toFixed(2)},Quantity: ${
      this.quantity
    }, Expiry Date: ${this.expirationDate}`;
  }
}

// Test PerishableProduc class
const milk = new PerishableProduct("Milk", 6.99, 2, "20=04-2025");
const bread = new PerishableProduct("bread", 2.99, 3, "28-04-2025");
console.log("\nTest PerishableProduct class\n\n");
console.log(milk.toString());
console.log(`${milk.name} subtotal is $${milk.getValue().toFixed(2)}`);
console.log(bread.toString());
console.log(`${bread.name} subtotal is $${bread.getValue().toFixed(2)}`);

//Part 4: Store Management
/**
 * Represents a store inventory management system
 * @class
 */
class Store {
  constructor() {
    /**
     * Creates a Store instance with empty inventory
     * @constructor
     */
    this.inventory = [];
  }
  /**
   * Adds a product to the store inventory
   * @param {Product|PerishableProduct} product - The product to add
   * @returns {Store} Returns the Store instance for chaining
   */
  addProduct(product) {
    this.inventory.push(product);
    return this; // Allow method chaining
  }
  /**
   * Calculates the total value of all products in inventory
   * @returns {number} Total inventory value
   */
  getInventoryValue() {
    return this.inventory.reduce(
      (total, product) => total + product.getValue(),
      0
    );
  }
  /**
   * Finds a product in inventory by name (case-insensitive)
   * @param {string} name - The product name to search for
   * @returns {Product|PerishableProduct|null} Found product or null if not found
   */
  findProductByName(name) {
    const searchName = name.toLowerCase();
    return (
      this.inventory.find(
        (product) => product.name.toLowerCase() === searchName
      ) || null
    );
  }
}

// Part 5: Testing the System
// Create at least 5 products, including at least 2 PerishableProduct objects.
const products = [
  new Product("Laptop", 999.99, 10),
  new Product("Mouse", 24.99, 50),
  new Product("Keyboard", 49.99, 30),
  new PerishableProduct("Milk", 3.49, 100, "15-04-2025"),
  new PerishableProduct("Cheese", 5.99, 40, "27-04-2025"),
];

//part 5
console.log("\n\nSystem Testing");

//Display initial inventory
//Create new store
const myStore = new Store();
//Add products to the store
products.forEach((product) => myStore.addProduct(product));

console.log("=== Initial Inventory ===");
console.log(
  `Total Inventory Value: $${myStore.getInventoryValue().toFixed(2)}\n`
);

//Apply 15% discount
const discountedProducts = Product.applyDiscount(myStore.inventory, 0.15);
const discountedStore = new Store();
discountedProducts.forEach((p) => discountedStore.addProduct(p));

// Display discounted inventory value
console.log("=== After 15% Discount ===");
console.log(
  `Total Inventory Value: $${discountedStore.getInventoryValue().toFixed(2)}\n`
);

// Find and display a specific product
const searchName = "cheese";
const foundProduct = discountedStore.findProductByName(searchName);

console.log("=== Product Search ===");
if (foundProduct) {
  console.log(`Found product "${searchName}":`);
  console.log(foundProduct.toString());
} else {
  console.log(`Product "${searchName}" not found.`);
}

// Display full inventory details
console.log("\n=== Full Inventory Details ===");
discountedProducts.forEach((p) => console.log(p.toString()));
