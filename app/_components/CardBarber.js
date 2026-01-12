import { View, Text, Image, Pressable } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';


export default function CardBarber({
    Barber,
    onPress = null,
    showIcon = true,
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
                <Image source={Barber.image} style={{ width: 50, height: 50 }} />  
                <View style={{ flex: 1, marginLeft: 15 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{Barber.name}</Text>
                </View>
                {showIcon && <Entypo name="chevron-small-right" size={24} color="black" />}
            </View>
        </Pressable>
    )
} 