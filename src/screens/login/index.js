import React, { useLayoutEffect, useState } from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, TextInput, Pressable, ActivityIndicator, Modal } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import styles from './styles';
import { useDispatch } from 'react-redux';
import { signIn } from '../../features/appAuth';

const LoginSreen = ({ navigation }) => {
    const [modal, setModal] = useState(false)
    const [isSecure, setIsSecure] = useState(true)
    const dispatch = useDispatch();
    const [auth, setAuth] = useState({
        email: '',
        password: '',
    })

    const loginHandle = () => {
        if (auth.email !== '' || auth.password !== '') {
            setModal(true);
            setTimeout(() => {
                setModal(false);
                dispatch(signIn({
                    email: auth.email
                }))
            }, 1000)
        } else {
            alert('Please fill your infomation')
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: false,
            headerStyle: { backgroundColor: '#1F1C2C', shadowColor: 'transparent' },
            headerLeft: () => (
                <TouchableOpacity style={styles.btnBack} onPress={navigation.goBack}>
                    {/* <AntDesign name="arrowleft" size={24} color="white" /> */}
                    <Text style={styles.loginTitle}>Login</Text>
                </TouchableOpacity>
            ),
        })
    }, [navigation])

    return (
        <SafeAreaView style={styles.container}>
            <Modal
                transparent={true}
                animationType={'none'}
                visible={modal}>
                <View style={{ flex: 1, backgroundColor: '#000', opacity: 0.5, alignItems: 'center', justifyContent: 'center' }} >
                    <ActivityIndicator size="large" color="#fff" />
                </View>
            </Modal>
            <View style={styles.box}>
                <View style={styles.options}>
                    <Text style={styles.txtOptions}>Log in with one of following options</Text>
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
                    <View style={styles.email}>
                        <Text style={styles.formTitle}>Email</Text>
                        <TextInput
                            value={auth.email}
                            onChangeText={(e) => setAuth({ ...auth, email: e })}
                            style={styles.textInput}
                            placeholder='Enter your email'
                            placeholderTextColor='#9C9C9C'
                        />
                    </View>
                    <View style={styles.password}>
                        <Text style={styles.formTitle}>Password</Text>
                        <TextInput
                            value={auth.password}
                            onChangeText={(e) => setAuth({ ...auth, password: e })}
                            style={[styles.textInput, { color: '#9C9C9C' }]}
                            placeholder='Enter your password'
                            placeholderTextColor='#9C9C9C'
                            secureTextEntry={isSecure}
                        />
                        <TouchableOpacity onPress={() => setIsSecure(!isSecure)} style={{ position: 'absolute', right: 20, top: '30%' }}>
                            <Octicons
                                name={isSecure ? 'eye-closed' : 'eye'}
                                color='#ddd'
                                size={20}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.login}>
                        <TouchableOpacity activeOpacity={0.5} onPress={loginHandle}>
                            <LinearGradient start={{ x: 0, y: 0 }} colors={['#A26D5C', '#BF765A', '#F48753']} style={styles.linearGradient}>
                                <Text style={styles.txtLogin}>Login</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.txtBottom}>Don???t have an account? {''}
                        <Pressable onPress={() => navigation.navigate('SignUp')}>
                            <Text style={styles.txtSignUp}>
                                Sign up
                            </Text>
                        </Pressable>
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default LoginSreen;
