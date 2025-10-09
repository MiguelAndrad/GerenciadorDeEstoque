import { StatusBar } from 'expo-status-bar';
import ShortcutsBar from './_components/ShortcutsBar';
import { StyleSheet, Text, View, KeyboardAvoidingView, ScrollView, Pressable } from 'react-native';

export default function ProductList() {
    return (
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} >
                <View style={styles.container}>
                    <View style={{flexDirection:'row', justifyContent:'space-between',
                         width:'90%', padding:10}}>
                        <Text>Lista de Produtos</Text>
                        <Pressable>
                            <Text>Adicionar Produto</Text>
                        </Pressable>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-between', 
                        width:'90%', padding:10, borderBottomWidth:1, marginTop:10}}>
                        <Text>Produto</Text>
                        <Text>Quantidade</Text>
                        <Text>Valor unitario</Text>
                        <Text>Valor total</Text>
                    </View>
                    <ShortcutsBar />
                    <StatusBar style="auto" />
                </View>
            </ScrollView>
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
});