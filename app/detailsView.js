import { View, Text, Pressable, ScrollView, Image } from 'react-native';
import ShortcutsBar from './_components/ShortcutsBar';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { ProductList } from './_services/ProductService';
import Entypo from '@expo/vector-icons/Entypo';
import Octicons from '@expo/vector-icons/Octicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function details() {
    const { id } = useLocalSearchParams();
    const products = ProductList();
    const product = products.find(p => p.id == id);

    const router = useRouter();
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Detalhes do Produto</Text>
            </View>
            <ScrollView contentContainerStyle={{
                flexGrow: 1,
                padding: 20,
                paddingBottom: 80,
                backgroundColor: '#f5f5f5'
            }} >
                <View style={styles.image}>
                    <Image
                        source={product.image}
                        style={styles.image}
                        resizeMode="contain"
                    />
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 20,
                        fontWeight: 'bold',

                    }}>
                        {product.name}
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, gap: 10 }}>
                    <View style={styles.CardIndicator}>
                        <View >
                            <Text style={styles.text}>
                                Quantidade em Estoque
                            </Text>
                        </View>
                        <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
                                {product.quantity} </Text>
                            <Text style={styles.text}>Unidades</Text>
                        </View>
                    </View>
                    <View style={styles.CardIndicator}>
                        <Text style={styles.text}>
                            Preço de Venda
                        </Text>
                        <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
                                R$ {product.salePrice}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.Card}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                        <Text style={styles.title}>
                            Detalhes do Produto
                        </Text>
                        <Entypo name="chevron-small-up" size={24} color="black" />
                    </View>

                    <View style={{ marginTop: 10 }}>
                        <Text style={styles.subtitle}>Descrição</Text>

                        <View style={styles.miniCard}>
                            <ScrollView style={{ maxHeight: 150 }}>
                                <Text style={styles.descriptionText}>
                                    {product.descript}
                                </Text>
                            </ScrollView>
                        </View>

                    </View>

                    <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={styles.subtitle}> Custo</Text>
                        <Text style={styles.detailsText} > R$ {product.price}</Text>
                    </View>
                    <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={styles.subtitle}> Alerta de Estoque Baixo</Text>
                        <Text style={[styles.detailsText, { color: 'red' }]}> {product.minStock} Unidades </Text>
                    </View>
                </View>

                <View style={styles.Card}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                        <Text style={styles.title}>
                            Histórico de Transações
                        </Text>
                        <Entypo name="chevron-small-up" size={24} color="black" />
                    </View>
                </View>
            </ScrollView>
            <Pressable onPress={() => router.push('./Add/AddView')}>
                <View style={styles.btnEditProduct}>
                    <Octicons name="pencil" size={30} color="white" />
                </View>
            </Pressable>
            <Pressable onPress={() => router.push('./Add/AddView')}>
                <View style={styles.btnMoviment}>
                    <MaterialCommunityIcons name="swap-horizontal" size={24} color="white" />
                </View>
            </Pressable>

            <ShortcutsBar />
        </View>
    );
}
const styles = StyleSheet.create({
    header: {
        width: '100%',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: '#f5f5f5',
        borderColor: 'gray',
        borderWidth: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    btnEditProduct: {
        position: 'absolute',
        bottom: 150,
        right: 20,
        backgroundColor: '#1973f0',
        width: 50,
        height: 50,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    },
    btnMoviment: {
        position: 'absolute',
        bottom: 80,
        right: 20,
        backgroundColor: '#787c7c',
        width: 50,
        height: 50,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    },
    image: {
        width: '100%',
        height: 280,

    },
    text: {
        fontSize: 16,
        color: '#333',

    },
    Card: {
        width: '100%',
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 20,
        gap: 8,
        marginTop: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    CardIndicator: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#fff',
        padding: 20,
        height: 100,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 10,
        width: 175,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    subtitle: {
        fontSize: 16,
        color: 'gray',
    },
    detailsText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    miniCard: {
        backgroundColor: '#f5f5f5',
        padding: 12,
        borderRadius: 10,
        marginTop: 6,
    },
    descriptionText: {
        fontSize: 14,
        color: '#333',
        lineHeight: 20,
    },

});