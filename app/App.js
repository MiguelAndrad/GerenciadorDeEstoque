import "expo-router/entry";
import { StatusBar } from 'expo-status-bar';
import ShortcutsBar from './_components/ShortcutsBar';
import { StyleSheet, Text, View, KeyboardAvoidingView, ScrollView } from 'react-native';

export default function App() {
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
            <Text>📦Total de produtos: </Text>
            <Text>💰Valor em estoque: </Text>
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
