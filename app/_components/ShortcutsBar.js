import { StyleSheet, Text, View, Pressable, } from 'react-native';
import { useRouter } from 'expo-router';
const ShortcutsBar = () => {
    const router = useRouter();
    return (
        <View style={styles.shortcutBar}>
            <Pressable onPress={() => router.push('ProductList')}>
                <Text>Ver Produtos</Text>
            </Pressable>
            <Pressable onPress={() => router.push('NewMovement')}>
                <Text>Nova Movimentação</Text>
            </Pressable>
            <Pressable onPress={() => router.push('Report')}>
                <Text>Relatório</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    shortcutBar: {
        position: 'absolute',
        bottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#f0f0f0',
        width: '95%',
        height: 70,
        borderRadius: 18,
    },
});

export default ShortcutsBar;