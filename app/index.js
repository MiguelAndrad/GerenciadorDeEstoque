import "expo-router/entry";
import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import ShortcutsBar from './_components/ShortcutsBar';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Search from "./_components/search";
import { productsBelowMinimumStock, ProductList, calculateTotalInventoryValue, totalProducts } from './_Services/ProductService';
import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, Pressable } from 'react-native';

export default function App() {
    const [productBelowMinimumStock, setProductBelowMinimumStock] = useState(productsBelowMinimumStock(5));
    const [products, setProducts] = useState(ProductList());
  return (
    <View >
    <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 20,paddingBottom:80, backgroundColor: '#f5f5f5' }} >
      <View style={styles.container}>
        {/*header */}
        <View style={{ flexDirection: 'row', width: '100%', marginTop: 25, justifyContent: 'space-between', fontWeight: 'bold', fontSize: 24, marginBottom: 20 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Painel</Text>
          <Ionicons name="person" size={24} color="black" />
        </View>
        {/*Buscar */}
        <Search />
        {/* indicators */}
        <View style={styles.indicatorCard}>
          <Text style={styles.indicatorTitle}>Valor Total do Estoque</Text>
          <Text style={styles.indicatorValue}> R$ {calculateTotalInventoryValue()}</Text>
        </View>
        <View style={styles.indicatorCard}>
          <Text style={styles.indicatorTitle}>Produtos Totais</Text>
          <Text style={styles.indicatorValue}>{totalProducts()}</Text>
        </View>
        <View style={styles.indicatorCard}>
          <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
            <Text style={styles.indicatorTitle}>Itens em Baixo Estoque</Text>
            <Feather name="alert-triangle" size={20} color="black" />
          </View>
          <Text style={[styles.indicatorValue, { color: 'red' }]}>{productBelowMinimumStock.length}</Text>
        </View>
        <Text style={{fontWeight: 'bold', fontSize: 16, marginTop: 15}}>Atenção: Pouco Estoque </Text>

        {productBelowMinimumStock.map((product) => (
            <View key={product.id} style={styles.cardMinStock}>
               <Image source={product.image} style={{width:50, height:50}} />
                <View>
                <Text>{product.name}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
                    <Text style={{color: 'red'}}>{product.quantity}</Text>
                    <Text style={{color: 'gray'}}>unidades restantes</Text>
                </View>
                </View>
                <Ionicons name="alert" size={24} color="orange" />
                
            </View>
        ))}
    

      </View>
    </ScrollView>
      {/* shortcuts bar */}
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
  indicatorTitle: {
    fontSize: 16,
    color: 'gray',
  },
  indicatorValue: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  indicatorCard: {
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
    gap: 8,
    marginTop: 20,
    borderRadius: 10,
    //shadow / sombra atras do componente
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    /*borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10, */
    //f5f5f5
    //fff
  },
  cardMinStock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 70,
    backgroundColor: '#fff',
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

});
