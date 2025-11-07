import {StyleSheet, View, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const Search = () => (
    <View style={styles.search}>
        <Ionicons name="search" size={24} color="black" />
        <TextInput placeholder="Buscar" style={{ flex: 1, marginLeft: 10 }} />
    </View>
);
const styles = StyleSheet.create({
    search:{
        flexDirection: 'row', 
        alignItems: 'center', 
        marginBottom: 20,
        width: '100%',
        backgroundColor: '#fff',   
        borderRadius: 10,
        padding: 10,
        //shadow / sombra atras do componente
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    }
})
export default Search;