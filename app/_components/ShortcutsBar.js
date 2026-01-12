import { StyleSheet, Text, View, Pressable, Platform, } from 'react-native';
import { useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import Foundation from '@expo/vector-icons/Foundation';
import Entypo from '@expo/vector-icons/Entypo';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const ShortcutsBar = () => {
    const router = useRouter();
    return (
        <View style={styles.shortcutBar}>
            <Pressable style={styles.Pressable} onPress={() => router.push('/')}>
             <Entypo name="grid" size={24} color="black" />
                <Text>Painel</Text>
            </Pressable>
            <Pressable style={styles.Pressable} onPress={() => router.push('ProductList')}>
                <MaterialCommunityIcons name="clipboard-check-multiple-outline" size={24} color="black" />
                <Text>Produtos</Text>
            </Pressable>
            <Pressable style={styles.Pressable} onPress={() => router.push('/barbers/BarbersList')}>
               <Ionicons name="person" size={24} color="black" />
                <Text>Barbeiros</Text>
            </Pressable>
            <Pressable style={styles.Pressable} onPress={() => router.push('Reports')}>
                <Foundation name="graph-bar" size={24} color="black" />
                <Text>Relatório</Text>
            </Pressable>
            
        </View>
    );
}

const styles = StyleSheet.create({
    shortcutBar: {
        backgroundColor: '#fff',
        width: '100%',
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        padding: 15,
        paddingHorizontal: 30,
        bottom: Platform.OS === 'ios' ? 0 : 0,//antes usava -20 no ios, pq ficava muito em cima, mas agr esta ficando normal com 0 .
        borderRadius: 10,
    },
    Pressable:{
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default ShortcutsBar;