import Product from "../_Models/Product";

let nextId = 1;
let products = [];

products.push(new Product(nextId++, "Leave-in", 20, 4, new Date(), null, 45, 5, require('../../assets/leave-in.jpeg')));
products.push(new Product(nextId++, "Mascara de hidratação", 40, 10, new Date(), null, 90, 5, require('../../assets/mascara.jpeg')));
products.push(new Product(nextId++, "Shampoo Rub", 20, 5, new Date(), null, 40, 5, require('../../assets/shampoo-rub.jpeg')));
products.push(new Product(nextId++, "Pomada Modeladora", 15, 8, new Date(), null, 35, 5, require('../../assets/pomada.jpeg')));
products.push(new Product(nextId++, "Balm para barba", 40, 1, new Date(), null, 80, 5, require('../../assets/balm.jpeg')));

export function ProductList() {
    return products;
}

export function createProduct({ name, unitValue, quantity, minStock, date, editDate, salePrice, image }) {
    const product = new Product(
        nextId++,
        name,
        unitValue,
        quantity,
        minStock,
        date,
        editDate,
        salePrice,
        image 
    );
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
