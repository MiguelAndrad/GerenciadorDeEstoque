import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { useRouter } from 'expo-router';
import ShortcutsBar from './_components/ShortcutsBar';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, View, ScrollView, TextInput, Pressable } from 'react-native';

export default function Transaction() {
    const router = useRouter();
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Registrar Movimentaçãos</Text>
            </View>
            <ScrollView contentContainerStyle={{ flex: 1, padding: 20, paddingBottom: 80, backgroundColor: '#f5f5f5' }} >
                <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.Title}>Produto</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <TextInput style={styles.Modal} placeholderTextColor="grey" placeholder="Selecione um produto"></TextInput>
                    <Ionicons name="chevron-expand-outline" size={24} color="black" style={{position: 'absolute', right: 10, top: 15}}/>
                    </View>
                </View>
                <View style={{ flexDirection: 'column', marginTop: 20 }}>
                    <Text style={styles.Title}>Tipo de Movimentação</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Pressable><Text placeholderTextColor="black" placeholder="Entrada">Entrada</Text></Pressable>
                        <Pressable><Text placeholderTextColor="black" placeholder="Saída">Saída</Text></Pressable>
                    </View>
                </View>
                <View style={{ flexDirection: 'column', marginTop: 20 }}>
                    <Text style={styles.Title}>Barbeiro Responsável</Text>
                    <TextInput style={styles.Modal} placeholderTextColor="grey" placeholder="Selecione o barbeiro"></TextInput>
                </View>
                <View style={{ flexDirection: 'column', marginTop: 20 }}>
                    <Text style={styles.Title}>Quantidade</Text>
                    <TextInput style={styles.Modal} placeholderTextColor="grey" placeholder="Insira a quantidade"></TextInput>{/* vai ter um menos na esquerda, o numero no meio e um mais na direita. */}
                </View>
                <View style={{ flexDirection: 'column', marginTop: 20 }}>
                    <Text style={styles.Title}>Observações</Text>
                    <TextInput style={styles.inputDescription} multiline={true} placeholderTextColor="grey" placeholder="Insira observações"></TextInput>
                </View>
                <Pressable onPress={() => router.push('/TransactionSuccess')} style={{ backgroundColor: '#007bff', padding: 15, borderRadius: 8, alignItems: 'center', marginTop: 30 }}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Registrar Movimentação</Text>
                </Pressable>
            </ScrollView>
            <ShortcutsBar />
            <StatusBar style="auto" />
        </View>

    )

}
const styles = StyleSheet.create({
    header: {
        paddingTop: 50,
        paddingBottom: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    Title: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 10,
        marginRight: 10,
    },
    Modal: {
        fontSize: 16,
        borderRadius: 8,
        padding: 15,
        backgroundColor: 'white',
    },
   inputDescription: {
        height: 100,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 10,
        textAlignVertical: 'top',

    },
});