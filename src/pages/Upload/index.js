import React, {useContext} from 'react';
import { View,
         Text,
         StyleSheet,
         TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable';

//biblioteca para o upload
import { launchImageLibrary } from 'react-native-image-picker';

//AUTH
import {AuthContext} from '../../contexts/auth'

export default function Welcome(){

    //AUTH
    const { nome, user } = useContext(AuthContext);

    const handleClickUpload = () =>{
        let options = {
            mediaType: 'photo',
            includeBase64: true
        }
        launchImageLibrary(options, onSuccess)
    };

    const onSuccess = (res) =>{
        console.log('res', res)
        if(res.didCancel == true){
            // usuario cancelando a acao
            console.log('user cancel')
        }else if(res.errorCode && parseInt(res.errorCode)){
            //erro
            console.log('upload error')
        }else{ 
            const data = new FormData();
                data.append('name','res.fileName');
                data.append('uploadedFile', res.assets);
                data.append('uploadBtn', 'Upload');

                let req = fetch(
                    'http://179.215.0.104:9001/upload/upload',
                    {
                      method: 'post',
                      body: data,
                      headers: {
                        'Content-Type': 'multipart/form-data; ',
                      },
                    }
                );
            console.log(res.assets[0['uri']])
        }
    };

    return(
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image 
                animation="flipInY"
                source={{
                    uri:
                     'https://ludwigsistemas.000webhostapp.com/upload/photos/4606c150ef4e9f3e9f31db4e4abcdb01-resized.png'
                }}
                style={{ width: 200, height:200, borderRadius:100}}
                resizeMode='contain'
                />
                <Text>Email: {user.email}</Text>
            </View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Faça o upload da sua foto</Text>
                <Text style={styles.text}>Escolha sua foto de perfil</Text>
                
                <TouchableOpacity
                 style={styles.button}
                 onPress={()=> handleClickUpload() }>
                    <Text style={styles.buttonText}>Upload</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#38A69D',
    },
    containerLogo:{
        flex: 2,
        backgroundColor: '#38A69D',
        width: '40%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerForm:{
        flex: 1,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom:12,
    },
    text:{
        color:'#A1A1A1',
    },
    button:{
        position: 'absolute',
        backgroundColor:'#38A69D',
        borderRadius: 50,
        paddingVertical:8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:{
        fontSize: 18,
        color:'#FFF',
        fontWeight: 'bold'
    }
})