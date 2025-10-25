import "expo-router/entry";
import { StatusBar } from 'expo-status-bar';
import ShortcutsBar from './_components/ShortcutsBar';
import { StyleSheet, Text, View, KeyboardAvoidingView, ScrollView } from 'react-native';
import { createProduct, totalProducts, calculateTotalInventoryValue } from '._Services/ProductService';

export default function App() {

  createProduct("Notebook", 3500, 5);
  createProduct("Mouse", 80, 2);

  const total = totalProducts();
  const valorTotal = calculateTotalInventoryValue();
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} >
        <View style={styles.container}>
          {/*header */}
          <View>
            <Text>Gerenciador de Estoque</Text>
          </View>
          {/* indicators */}
          <View style={styles.indicators}>
            <Text>📦Total de produtos: {total}</Text>
            <Text>💰Valor em estoque: {valorTotal}</Text>
            <Text>⚠️Produtos abaixo do estoque mínimo: </Text>
          </View>
          {/* shortcuts bar */}
          <ShortcutsBar />

          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicators: {
    flex: 0.6,
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 15,
    
  },
});
