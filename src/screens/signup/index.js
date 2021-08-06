import React, { useLayoutEffect, useContext, useState } from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, TextInput, Pressable } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDispatch } from 'react-redux';
import { signUp } from '../../features/appAuth';
import styles from './styles';

const SignUpSreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [auth, setAuth] = useState({
        name: '',
        email: '',
        password: ''
    });

    const signUpHandel = () => {
        dispatch(signUp({
            email: auth.email,
        }));
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: false,
            headerStyle: { backgroundColor: '#1F1C2C', shadowColor: 'transparent' },
            headerLeft: () => (
                <TouchableOpacity style={styles.btnBack} onPress={navigation.goBack}>
                    <AntDesign name="arrowleft" size={24} color="white" /><Text style={styles.loginTitle}>Sign up</Text>
                </TouchableOpacity>
            ),
        })
    }, [navigation])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.box}>
                <View style={styles.options}>
                    <Text style={styles.txtOptions}>Sign up with one of following options</Text>
                    <View style={styles.btnOptions}>
                        <TouchableOpacity style={styles.options1}>
                            <AntDesign style={styles.iconOptions} name='apple1' size={24} color='white' />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.options1}>
                            <AntDesign style={styles.iconOptions} name='google' size={24} color='white' />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.form}>
                    <View style={styles.name}>
                        <Text style={styles.formTitle}>Name</Text>
                        <TextInput
                            value={auth.name}
                            onChangeText={e => { setAuth({ ...auth, name: e }) }}
                            style={styles.textInput}
                            placeholder='Enter your full name'
                            placeholderTextColor='#9C9C9C'
                        />
                    </View>
                    <View style={styles.email}>
                        <Text style={styles.formTitle}>Email</Text>
                        <TextInput
                            value={auth.email}
                            onChangeText={e => { setAuth({ ...auth, email: e }) }}
                            style={styles.textInput}
                            placeholder='Enter your email'
                            placeholderTextColor='#9C9C9C'
                        />
                    </View>
                    <View style={styles.password}>
                        <Text style={styles.formTitle}>Password</Text>
                        <TextInput
                            value={auth.password}
                            onChangeText={e => { setAuth({ ...auth, password: e }) }}
                            style={[styles.textInput, { color: '#9C9C9C' }]}
                            placeholder='Enter your password'
                            placeholderTextColor='#9C9C9C'
                        />
                    </View>
                    <View style={styles.login}>
                        <TouchableOpacity onPress={signUpHandel} activeOpacity={0.5}>
                            <LinearGradient start={{ x: 0, y: 0 }} colors={['#A26D5C', '#BF765A', '#F48753']} style={styles.linearGradient}>
                                <Text style={styles.txtLogin}>Register</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.txtBottom}>Already have an account? {''}
                        <Pressable onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.txtSignUp}>
                                Login
                            </Text>
                        </Pressable>
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default SignUpSreen;
