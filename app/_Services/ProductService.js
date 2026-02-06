import Product from "../_Models/Product";
import {collection, addDoc, getDocs, doc, updateDoc, deleteDoc} from "firebase/firestore";
import {db} from "./firebase";

let nextId = 1;
let products = [];

products.push(new Product(nextId++, "Leave-in", 20, 4, 5, 45, require('../../assets/leave-in.jpeg'), "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"

    , new Date(), null,));
products.push(new Product(nextId++, "Mascara de hidratação", 40, 10, 5, 90, require('../../assets/mascara.jpeg'), "Apenas teste!", new Date(), null,));
products.push(new Product(nextId++, "Shampoo Rub", 20, 5, 5, 40, require('../../assets/shampoo-rub.jpeg'), "Apenas teste!", new Date(), null,));
products.push(new Product(nextId++, "Pomada Modeladora", 15, 8, 5, 35, require('../../assets/pomada.jpeg'), "Apenas teste!", new Date(), null,));
products.push(new Product(nextId++, "Balm para barba", 40, 1, 5, 80, require('../../assets/balm.jpeg'), "Apenas teste!", new Date(), null,));

export function ProductList() {
    return products;
}

export function createProduct({ nextId, name, unitValue, quantity, minStock, salePrice, image, descript, date, editDate, }) {
    const product = new Product(
        nextId++,
        name,
        unitValue,
        quantity,
        minStock,
        salePrice,
        image,
        descript,
        date,
        editDate
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

export function productsBelowMinimumStock() {
    return products.filter(product => product.quantity <= product.minStock);
}


// cria função assíncrona para adicionar produto
export async function addProduct(UserId, product) {
    await addDoc( // "addDoc" é uma função para adicionar um documento na coleção
        collection(db, "users", UserId, "products"),
        product
    );
}
    