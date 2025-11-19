import {useState} from 'react';
import { createProduct } from '../_services/ProductService';

export default function useAddViewModel() {
    const [productName, setProductName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [unitValue, setUnitValue] = useState('');
    const [minStock, setMinStock] = useState('');
    const [description, setDescription] = useState('');

    const AddProduct = async () => {
        const productData = {
            name: productName,
            quantity: parseInt(quantity),
            unitValue: parseFloat(unitValue.replace(',', '.')),
            minStock: parseInt(minStock),
            image: null,
        };
        await createProduct(productData);
        console.log('Produto adicionado:', productData);
    };

    return {
        productName,
        setProductName,
        quantity,
        setQuantity,
        unitValue,
        setUnitValue,
        minStock,
        setMinStock,
        AddProduct,
        description,
        setDescription,
    };
}