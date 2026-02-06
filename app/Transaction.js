import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { useRouter } from 'expo-router';
import ShortcutsBar from './_components/ShortcutsBar';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';

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
                    <View style={styles.card}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight:15,paddingLeft:15}}>
                            <Text>Selecione ou busque o produto</Text>
                            <Ionicons name="chevron-expand-outline" size={24} color="black" />
                        </View>
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
                    <View style={styles.card}>
                         <View style={{ flexDirection: 'row', justifyContent:'space-between' , alignItems: 'center', paddingRight:15,paddingLeft:15 }}>
                            <Text>Selecione o barbeiro</Text>
                            <Ionicons name="chevron-expand-outline" size={24} color="black" />
                         </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'column', marginTop: 20 }}>
                    <Text style={styles.Title}>Quantidade</Text>
                    <View style={styles.card}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight:15,paddingLeft:15 }}> 
                            <Entypo name="minus" size={24} color="black" />
                            <Text>0</Text>
                           <Entypo name="plus" size={24} color="black" />
                        </View>  
                    </View>
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
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        height: 40,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'gray',

    },
});