import { StatusBar } from 'expo-status-bar';
import { useState} from "react";
import ShortcutsBar from './_components/ShortcutsBar';
import { StyleSheet, Text, View, ScrollView, Pressable, Modal, TextInput} from 'react-native';


export default function ProductList() {
    const [ModalVisible, setModalVisible] = useState(false);
    const [productName, setProductName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [unitValue, setUnitValue] = useState('');

    return (
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} >
                <View style={styles.container}>
                    <View style={{flexDirection:'row', justifyContent:'space-between',
                         width:'90%', padding:10}}>
                        <Text>Lista de Produtos</Text>
                        <Pressable onPress={()=> setModalVisible(true)}>
                            <Text>Adicionar Produto</Text>
                        </Pressable>
                    </View>
                    <Modal visible={ModalVisible} animationType="slide">
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'rgba(0,0,0,0.5)'}}>
                            <View style={styles.popup}>
                                <View>
                                    <Text>Nome:</Text>
                                    <TextInput style={styles.input} placeholder="Nome " value={productName} onChangeText={setProductName} />
                                </View>
                                <View>
                                    <Text>Quantidade:</Text>
                                    <TextInput style={styles.input} placeholder="Quantidade" value={quantity} onChangeText={setQuantity} />
                                </View>
                                <View>
                                    <Text>Valor Unitário:</Text>
                                    <TextInput style={styles.input} placeholder="Valor Unitário" value={unitValue} onChangeText={setUnitValue} />
                                </View>
                                <Pressable style={styles.btn_Salvar} onPress={() => setModalVisible(false)}>
                                    <Text>Salvar</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>
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
        backgroundColor: '#F9FAFB',
        alignItems: 'center',
        justifyContent: 'center',
    },
    popup: {
        width: '80%',
        padding: 20,
        backgroundColor: '#E5E7EB',
        borderRadius: 10,
        elevation: 5,
    },
    input: {
        borderWidth: 2,
        width: '95%',
        height: 40,
        marginBottom: 15,
        borderColor: '#ccc',
        borderRadius: 15,
        padding: 10,
    },
   
    btn_Salvar: {
        backgroundColor: '#22C55E',
        alignItems: 'center',
        justifyContent: 'center',

        width: '95%',
        padding: 10,
        borderRadius: 10,
        elevation: 3,
    },
   
});