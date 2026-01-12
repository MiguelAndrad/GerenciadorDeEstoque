import { useEffect, useState } from 'react';
import { ProductList, updateProduct } from '../_services/ProductService';
import { useLocalSearchParams } from 'expo-router';

export default function useEditViewModel() {
    const params = useLocalSearchParams();

    const [id, setId] = useState('');
    const [productName, setProductName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [unitValue, setUnitValue] = useState('');
    const [salePrice, setSalePrice] = useState('');
    const [minStock, setMinStock] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        const product = ProductList().find(p => p.id == params.id);
        if (product) {
            setId(product.id || "")
            setProductName(product.name || "")
            setQuantity(product.quantity || "")
            setUnitValue(product.unitValue || "")
            setSalePrice(product.salePrice || "")
            setMinStock(product.minStock || "")
            setDescription(product.descript || "")
        }
    }, []);

    function handleUpdateProduct() {
        if (!id) return;

        const productData = {
            name: productName,
            quantity: parseInt(quantity),
            unitValue: parseFloat(unitValue.replace(',', '.')),
            salePrice: parseFloat(salePrice.replace(',', '.')),
            minStock: parseInt(minStock),
            descript: description,
            editDate: new Date(),
        };
        updateProduct(id, productData);
        console.log('Produto atualizado:', productData);

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
        description,
        setDescription,
        handleUpdateProduct,
    };
}