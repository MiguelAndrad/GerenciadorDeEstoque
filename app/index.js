import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { useRouter } from 'expo-router';
import ShortcutsBar from './_components/ShortcutsBar';
import Feather from '@expo/vector-icons/Feather';
import { productsBelowMinimumStock, calculateTotalInventoryValue, totalProducts,  } from './_Services/ProductService';
import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import ProductItem from './_components/ProductItem';

export default function App() {
  
  const [productBelowMinimumStock, setProductBelowMinimumStock] = useState(productsBelowMinimumStock());
  const router = useRouter();
  return (
    <View style={{ flex: 1 }} >
      <ScrollView contentContainerStyle={{ flex: 1, padding: 20, paddingBottom: 80, backgroundColor: '#f5f5f5' }} >
        <View style={styles.container}>
          {/*header */}
          <View style={{ flexDirection: 'row', width: '100%', marginTop: 25, justifyContent: 'space-between', fontWeight: 'bold', fontSize: 24, marginBottom: 20 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Painel</Text>
            <Pressable onPress={() => router.push('Settings')}>
              <Feather name="settings" size={24} color="black" />
            </Pressable>
          </View>
          <View style={{ marginTop: 16, }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Visão Geral do Estoque</Text>
          </View>
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
          <Text style={{ fontWeight: 'bold', fontSize: 16, marginTop: 15 }}>Atenção: Pouco Estoque </Text>

          {productBelowMinimumStock.map((p) => (
            <ProductItem
              key={p.id}
              product={p}
              showIcon={false}
              QuantityColor='red'
              style={styles.cardMinStock}
            />
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
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
