import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../pages/Welcome/index';
import SignIn from '../pages/Signin/index';
import Upload from '../pages/Upload/index';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return (
    <Stack.Navigator>
        <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
        />


        <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{headerShown: false}}
        />

        <Stack.Screen
            name="Upload"
            component={Upload}
            options={{headerShown: false}}
        />
        
    </Stack.Navigator>
    )
}
