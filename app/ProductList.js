import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import ShortcutsBar from './_components/ShortcutsBar';
import Search from "./_components/search";
import Entypo from '@expo/vector-icons/Entypo';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import { ProductList } from './_Services/ProductService';
import ProductItem from './_components/ProductItem';


export default function ProductListScreen() {
    const [products, setProducts] = useState(ProductList());

    const router = useRouter();

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
                    {products.map((p) => (
                        <ProductItem
                            key={p.id}
                            product={p}
                            showIcon={true}
                            QuantityColor='gray'
                            onPress={() => router.push({ pathname: './detailsView', params: { id: p.id } })}
                        />
                    ))}
                </View>
            </ScrollView>
            <Pressable onPress={() => router.push('./Add/AddView')}>
                <View style={styles.btnAddProduct}>
                    <Entypo name="plus" size={30} color="white" />
                </View>
            </Pressable>
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
    btnAddProduct: {
        position: 'absolute',
        bottom: 85,
        right: 20,
        backgroundColor: '#1973f0',
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