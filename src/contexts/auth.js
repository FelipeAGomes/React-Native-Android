import React, { createContext, useState } from 'react';

import {useNavigation} from '@react-navigation/native';

export const AuthContext = createContext({})

function AuthProvider({children}){
    const [user, setUser] = useState();
    const navigation = useNavigation();

    function login(email, senha){
        if(email == 'teste@teste.com' && senha == '1234'){
            setUser({
                email: email,
                status: "ATIVO"
            })

            navigation.navigate("Upload")
        }else{
            alert("Usuario Invalido")
        }
    }

    return(
        <AuthContext.Provider value= {{ nome : "Felipe Gomes", login, user}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;