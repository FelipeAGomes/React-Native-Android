import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function SignIn(){
    
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function handleSignIn(){
        // if(email != 'teste@teste.com' || senha != '123'){
        //     alert("Preencha os Campos")
        //     return;
        // }
        // const data = {
        //     email,
        //     senha
        // };

        console.log(data)
    };

    return(
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Bem-Vindo</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Email</Text>
                <TextInput
                 onChangeText={setEmail}
                 value={email}
                 placeholder="Digite um email..."
                 style={styles.input}/>

                <Text style={styles.title}>Senha</Text>
                <TextInput
                 onChangeText={setSenha}
                 value={senha}
                 placeholder="Sua senha"
                 style={styles.input}
                 secureTextEntry={true}/>

                 <TouchableOpacity
                  style={styles.button}
                   onPress={()=> navigation.navigate('Upload')}>
                     <Text style={styles.buttonText}>Acessar</Text>
                 </TouchableOpacity>

            </Animatable.View>
        </View>    
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#38A69D',
    },
    containerHeader:{
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF'
    },
    containerForm:{
        backgroundColor: '#FFF',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title:{
        fontSize: 20,
        marginTop: 28,
    },
    input:{
        borderBottomWidth:1,
        height: 40,
        marginBottom: 12,
        fontSize:16,
    },
    button:{
        backgroundColor: '#38A69D',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    }
})