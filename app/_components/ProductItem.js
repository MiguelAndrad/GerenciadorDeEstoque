import { View, Text, Image, Pressable } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';


export default function ProductItem({
    product,
    onPress = null,
    showIcon = true,
    QuantityColor = 'gray',
    style = {}
}) {
    return (
        <Pressable disabled={!onPress} onPress={onPress}>
            <View style={[{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                height: 70,
                padding: 15,
                marginTop: 7,
                borderRadius: 10,
                backgroundColor: '#fff',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 5,
                elevation: 3,
            }, style,]}>
                <Image source={product.image} style={{ width: 50, height: 50 }} />  
                <View style={{ flex: 1, marginLeft: 15 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{product.name}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                        <Text style={{ color: QuantityColor, fontSize: 14, }}>{product.quantity}</Text>
                        <Text style={{ color: 'gray', fontSize: 14, }}> em estoque </Text>
                    </View>
                </View>
                {showIcon && <Entypo name="chevron-small-right" size={24} color="black" />}
            </View>
        </Pressable>
    )
} 