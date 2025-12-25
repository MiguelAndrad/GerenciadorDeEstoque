import { StatusBar } from 'expo-status-bar';
import ShortcutsBar from '../_components/ShortcutsBar';
import { StyleSheet, Text, View, KeyboardAvoidingView, ScrollView, Pressable } from 'react-native';

export default function ProductList() {
    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} >
                <View style={styles.container}>
                    <View>
                        <Text>Selecionar Produto:</Text>
                        <Text>Tipo de Movimentação:</Text>
                        <Text>Quantidade:</Text>
                        <Text>Valor:</Text>
                        <Text>Data:</Text>
                    </View>
                    <View>
                        <Pressable>
                            <Text>Confirmar</Text>
                        </Pressable>
                    </View>
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
});