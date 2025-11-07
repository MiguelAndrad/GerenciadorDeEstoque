import Product from "../_Models/Product";

let nextId = 1;
let products = [];
let minStock=5;

// Sample products
products.push(new Product(nextId++, "Produto A", 50, 4, require('../../assets/leave-in.jpeg')));
products.push(new Product(nextId++, "Produto B", 30, 3, require('../../assets/leave-in.jpeg')));
products.push(new Product(nextId++, "Produto C", 20, 5, require('../../assets/leave-in.jpeg')));
products.push(new Product(nextId++, "Produto D", 15, 2, require('../../assets/leave-in.jpeg')));
products.push(new Product(nextId++, "Produto E", 100, 1, require('../../assets/leave-in.jpeg')));

export function ProductList() {
   return products;
}

export function createProduct(name, price, quantity, image) {
    const product = new Product(nextId++, name, price, quantity, image);
    products.push(product);
    return product;
}

export function calculateTotalInventoryValue() {
    return products.reduce((total, product) => total + product.getTotalValue(), 0);
}

export function totalProducts() {
    return products.length;
}

export function productsBelowMinimumStock(minStock) {
    return products.filter(product => product.quantity <= minStock);
}
