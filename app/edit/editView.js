import { View, Text, ScrollView, Pressable, StyleSheet, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import ShortcutsBar from '../_components/ShortcutsBar';
import useAddViewModel from '../Add/AddViewModel'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';

export default function Add() {
    const {
        productName, setProductName,
        quantity, setQuantity,
        unitValue, setUnitValue,
        salePrice, setSalePrice,
        minStock, setMinStock,
        description, setDescription,
        AddProduct
    } = useAddViewModel();

    const router = useRouter();
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Adicionar Produto</Text>
            </View>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 20, paddingBottom: 80, backgroundColor: '#f5f5f5' }} >
                    <View style={styles.container}>
                        {/*Header*/}
                        <View style={styles.image}>
                            <MaterialIcons name="add-photo-alternate" size={34} color="grey" style={{ marginBottom: 20 }} />
                            <Text style={{ color: 'grey', marginVertical: 5 }}>Toque para adicionar uma foto</Text>
                            <Pressable style={styles.btnAddImage}>
                                <Text>Carregar Imagem</Text>
                            </Pressable>
                        </View>
                        <View style={{ width: '100%', flexDirection: 'column' }}>
                            <View>
                                <Text style={styles.title}>Nome do Produto</Text>
                                <TextInput style={styles.inputName} value={productName} onChangeText={setProductName} placeholderTextColor="gray" placeholder="Ex: Leave-in" />
                            </View>
                            <View>
                                <Text style={styles.title}>Descrição</Text>
                                <TextInput style={styles.inputDescription} value={vm.description} onChangeText={vm.setDescription} multiline={true} placeholderTextColor="gray" placeholder="Insira os detalhes do produto" />
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View>
                                    <Text style={styles.title}>Preço de Compra</Text>
                                    <TextInput style={styles.inputPriceQuantityMinStockSalePrice} value={vm.unitValue} onChangeText={vm.setUnitValue} placeholderTextColor="gray" placeholder="R$ 0,00" keyboardType="numeric" />
                                </View>
                                <View>
                                    <Text style={styles.title}>Preço de Venda</Text>
                                    <TextInput style={styles.inputPriceQuantityMinStockSalePrice} value={vm.salePrice} onChangeText={vm.setSalePrice} placeholderTextColor="gray" placeholder="R$ 0,00" keyboardType="numeric" />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View>
                                    <Text style={styles.title}>Estoque Mínimo</Text>
                                    <TextInput style={styles.inputPriceQuantityMinStockSalePrice} value={vm.minStock} onChangeText={vm.setMinStock} placeholderTextColor="gray" placeholder="0" keyboardType="numeric" />
                                </View>
                                <View>
                                    <Text style={styles.title}>Quantidade</Text>
                                    <TextInput style={styles.inputPriceQuantityMinStockSalePrice} value={vm.quantity} onChangeText={vm.setQuantity} placeholderTextColor="gray" placeholder="0" keyboardType="numeric" />
                                </View>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.btnAddProduct} onPress={() => { vm.AddProduct(); router.push("/ProductList"); }}>
                                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Adicionar Produto</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
            <ShortcutsBar />
        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 360,
        height: 280,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 10,
        borderStyle: 'dashed',
        padding: 20,
        marginBottom: 20,
    },
    btnAddImage: {
        marginTop: 15,
        width: 150,
        height: 40,
        backgroundColor: '#e5e7eb',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'grey',
        marginBottom: 5,
        marginTop: 12,
    },
    inputName: {
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 10,

        paddingHorizontal: 10,

    },
    inputDescription: {
        height: 100,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 10,
        textAlignVertical: 'top',

    },
    inputPriceQuantityMinStockSalePrice: {
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 10,
        width: 170,

    },
    header: {
        width: '100%',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: '#f5f5f5',
        borderColor: 'gray',
        borderWidth: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    btnAddProduct: {
        marginTop: 30,
        height: 50,
        backgroundColor: '#1973f0',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
})