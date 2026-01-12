import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import LoginViewModel from './loginViewModel';

const LoginView = () => {
    const vm = LoginViewModel()
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo</Text>
            <View>
                <Text>E-mail</Text>
                <TextInput style={styles.input} placeholder="Digite seu e-mail" value={vm.email} onChangeText={vm.setEmail} />
            </View>

            <View>
                <Text>Senha</Text>
                <TextInput style={styles.input} placeholder="Digite sua senha" secureTextEntry value={vm.password} onChangeText={vm.setPassword} />
            </View>
            <TouchableOpacity style={styles.button} onPress={vm.Authenticate}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('forgot-password')}>
                <Text style={[styles.link, { marginTop: 15 }]}>Esqueci minha senha</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                <Text>Não tem uma conta? </Text>
                <TouchableOpacity onPress={() => router.push('register')}><Text style={[styles.link, { fontWeight: 'bold' }]}>Criar conta</Text></TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 40,
        backgroundColor: '#f5f5f5',
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: '#0c0c0c',
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    link: {
        textAlign: 'center',
        color: '#cfb53b',
    },
});

export default LoginView;