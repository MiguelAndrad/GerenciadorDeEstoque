import { useEffect, useState } from 'react';
import { createProduct } from '../_services/ProductService';
import { useLocalSearchParams } from 'expo-router';


export default function useAddViewModel() {
    const params = useLocalSearchParams();

    const [productName, setProductName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [unitValue, setUnitValue] = useState('');
    const [salePrice, setSalePrice] = useState('');
    const [minStock, setMinStock] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (params) {
            setProductName(params.name || "")
            setQuantity(params.quantity || "")
            setUnitValue(params.unitValue || "")
            setSalePrice(params.salePrice || "")
            setMinStock(params.minStock || "")
            setDescription(params.descript || "")
        }
    }, [params])

    const updateProduct = async () => {
        const productData = {
            name: productName,
            quantity: parseInt(quantity),
            unitValue: parseFloat(unitValue.replace(',', '.')),
            minStock: parseInt(minStock),
            image: null,
            descript: description
        };
        console.log('Updating product with data:', productData);

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