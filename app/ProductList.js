import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import ShortcutsBar from './_components/ShortcutsBar';
import { Image } from 'react-native';
import Search from "./_components/search";
import Entypo from '@expo/vector-icons/Entypo';
import { StyleSheet, Text, View, ScrollView, Pressable, Modal, TextInput } from 'react-native';
import { createProduct, ProductList } from './_Services/ProductService';

export default function ProductListScreen() {
    const [ModalVisible, setModalVisible] = useState(false);
    const [productName, setProductName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [unitValue, setUnitValue] = useState('');
    const [products, setProducts] = useState(ProductList());


    /*   function Save() {
           setModalVisible(false);
           createProduct(productName, parseFloat(unitValue), parseInt(quantity));
           setProducts([...ProductList()]);
           // reseta os campos
           setProductName('');
           setQuantity('');
           setUnitValue('');
   
       }*/

    return (
        <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 20, paddingBottom: 80, backgroundColor: '#f5f5f5' }} >
                <View style={styles.container}>
                    {/*header */}
                    <View style={{ width: '100%', marginTop: 25, fontWeight: 'bold', fontSize: 24, marginBottom: 20 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Lista de Produtos</Text>
                    </View>
                    {/*search*/}
                    <Search />
                    {/* product list */}
                    {products.map((p, index) => (
                        <View key={p.id} style={[styles.cardListProduct, { backgroundColor: index % 2 === 0 ? '#E5E7EB' : '#F3F4F6', }]}>
                            <Image source={p.image} style={{ width: 50, height: 50 }} />
                            <View style={{ flex: 1, marginLeft: 15 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{p.name}</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                                    <Text style={{ color: 'gray', fontSize: 14, }}>{p.quantity}</Text>
                                    <Text style={{ color: 'gray', fontSize: 14, }}> em estoque </Text>
                                </View>
                            </View>
                            <Entypo name="chevron-small-right" size={24} color="black" />
                        </View>
                    ))}
                    <Pressable>
                        <View style={styles.btnAddProduct}>
                            <Entypo name="plus" size={30} color="white" />
                        </View>
                    </Pressable>
                </View>
            </ScrollView>
            <ShortcutsBar />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    cardListProduct: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: 70,
        padding: 15,
        marginTop: 7,
        borderRadius: 10,
        //shadow / sombra atras do componente
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    btnAddProduct: {
        position: 'absolute',
        top: 90,
        left: 300,
        backgroundColor: '#1b89feff',
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    },
});