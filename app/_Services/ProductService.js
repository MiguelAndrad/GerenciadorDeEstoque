import Product from "../_Models/Product";

let nextId = 1;
let products = [];

export function ProductList() {
   return products;
}

export function createProduct(name, price, quantity) {
    const product = new Product(nextId++, name, price, quantity);
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
    return products.filter(product => product.quantity < minStock);
}



