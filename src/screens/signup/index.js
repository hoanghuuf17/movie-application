import React, { useLayoutEffect } from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, TextInput, Pressable } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';

const SignUpSreen = ({ navigation }) => {

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
                            style={styles.textInput}
                            placeholder='Enter your full name'
                            placeholderTextColor='#9C9C9C'
                        />
                    </View>
                    <View style={styles.email}>
                        <Text style={styles.formTitle}>Email</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder='Enter your email'
                            placeholderTextColor='#9C9C9C'
                        />
                    </View>
                    <View style={styles.password}>
                        <Text style={styles.formTitle}>Password</Text>
                        <TextInput
                            style={[styles.textInput, { color: '#9C9C9C' }]}
                            placeholder='Enter your password'
                            placeholderTextColor='#9C9C9C'
                        />
                    </View>
                    <View style={styles.login}>
                        <LinearGradient start={{ x: 0, y: 0 }} colors={['#A26D5C', '#BF765A', '#F48753']} style={styles.linearGradient}>
                            <Text style={styles.txtLogin}>Register</Text>
                        </LinearGradient>
                    </View>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.txtBottom}>Already have an account? {''}
                        <Pressable onPress={() => alert('Pressed')}>
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
