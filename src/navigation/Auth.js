import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginSreen from '../screens/login';
import SignUpSreen from '../screens/signup';



const Stack = createStackNavigator();
const Auth = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Login' component={LoginSreen} />
                <Stack.Screen name='SignUp' component={SignUpSreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Auth
