import React from 'react';
import { View,
         Text,
         StyleSheet,
         TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable';

//biblioteca para o upload
import { launchImageLibrary } from 'react-native-image-picker';

export default function Welcome(){

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
            uploadImage(res);
            console.log('upload com sucesso')
        }
    };

    const uploadImage = async (imagedata)=>{
        console.log('imagedata', imagedata)

        // let data = {
        //     method: 'POST',
        //     body: JSON.stringify({
        //       imagedata: imagedata
        //     }),
        //     headers: {
        //       Accept:       'application/json',
        //       'Content-Type': 'application/json',
        //     }
        // }
        //   return fetch('http://192.168.0.11/felipegomes/rnandroid/api/upload.php', data)
        //           .then((response) => response.json())  // promise
        //           .then((json) => {
        //               console.log('result', json)
        //           })
    }; 
    

    return(
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image 
                animation="flipInY"
                source={require('../../assets/teste.png')}
                style={{ width: 200, height:200, borderRadius:100}}
                resizeMode='contain'
                />
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