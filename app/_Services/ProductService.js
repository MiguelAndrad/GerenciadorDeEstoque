import Product from "../_Models/Product";

let nextId = 1;
let products = [];
let minStock=5;

// Sample products
products.push(new Product(nextId++, "Leave-in", 50, 4, require('../../assets/leave-in.jpeg')));
products.push(new Product(nextId++, "Mascara de hidratação", 30, 10, require('../../assets/mascara.jpeg')));
products.push(new Product(nextId++, "Shampoo Rub", 20, 5, require('../../assets/shampoo-rub.jpeg')));
products.push(new Product(nextId++, "Pomada Modeladora", 15, 8, require('../../assets/pomada.jpeg')));
products.push(new Product(nextId++, "Balm para barba", 100, 1, require('../../assets/balm.jpeg')));

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
