import { View, Text, Pressable, ScrollView, Image } from 'react-native';
import ShortcutsBar from '../_components/ShortcutsBar';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { BarberList } from '../_services/BarberService';
import Entypo from '@expo/vector-icons/Entypo';
import Octicons from '@expo/vector-icons/Octicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function details() {
    const { id } = useLocalSearchParams();
    const Barbers = BarberList();
    const Barber = Barbers.find(b => b.id == id);

    const router = useRouter();
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Detalhes do Barbeiro</Text>
            </View>
            <ScrollView contentContainerStyle={{
                flexGrow: 1,
                padding: 20,
                paddingBottom: 80,
                backgroundColor: '#f5f5f5'
            }} >
                <View style={styles.image}>
                    <Image
                        source={Barber.image}
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
                        {Barber.name}
                    </Text>
                </View>

                <View style={styles.Card}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                        <Text style={styles.title}>
                            Histórico de Vendas
                        </Text>
                        <Entypo name="chevron-small-up" size={24} color="black" />
                    </View>
                </View>
            </ScrollView>
            <ShortcutsBar />
            <StatusBar style="auto" />
        </View>
    );
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
   
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
});