import {useState} from 'react';
import { createProduct } from '../_services/ProductService';


export default function useAddViewModel() {
    const [productName, setProductName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [unitValue, setUnitValue] = useState('');
    const [salePrice, setSalePrice] = useState('');
    const [minStock, setMinStock] = useState('');
    const [description, setDescription] = useState('');

    const AddProduct = async () => {
        const productData = {
            name: productName,
            quantity: parseInt(quantity),
            unitValue: parseFloat(unitValue.replace(',', '.')),
            minStock: parseInt(minStock),
            image: null,
            descript: description
        };
        await createProduct(productData);
        console.log('Produto adicionado:', productData);

        setProductName('');
        setQuantity('');
        setUnitValue('');
        setSalePrice('');
        setMinStock('');
        setDescription('');

        

    };

    return {
        productName,
        setProductName,
        quantity,
        setQuantity,
        unitValue,
        setUnitValue,
        salePrice,
        setSalePrice,
        minStock,
        setMinStock,
        AddProduct,
        description,
        setDescription,
    };
}