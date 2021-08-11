import React, { useLayoutEffect } from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, Modal, Pressable, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';

const PolicySreen = ({ navigation }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'Policy',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#1F1C2C', shadowColor: 'transparent' },
            headerLeft: () => (
                <TouchableOpacity style={{ marginLeft: 20 }} onPress={navigation.goBack}>
                    <AntDesign name="arrowleft" size={24} color="white" />
                </TouchableOpacity>
            ),
        });
    }, [navigation])

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle='dark-content' />
            <Modal style={{ flex: 1 }} visible={true}>
                <WebView
                    style={{ top: 33 }}
                    incognito={true}
                    source={{ url: 'https://www.regjeringen.no/en/topics/culture-sports-and-non-profit-work/film-og-medier/innsiktsartikler/filmpolicy/id2001335/' }} />
                <Pressable style={{ position: 'absolute', top: 60, right: 20, backgroundColor: '#5b83d9', borderRadius: 10, padding: 5 }} onPress={navigation.goBack}>
                    <Text style={{ color: 'white', fontSize: 20 }}>Done</Text>
                </Pressable>
            </Modal>
        </SafeAreaView >
    );
}

export default PolicySreen;
