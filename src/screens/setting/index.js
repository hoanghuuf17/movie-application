import React, { useLayoutEffect, useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Switch } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

const SettingSreen = ({ navigation }) => {
    const [isEnabled, setIsEnabled] = useState({
        push: true,
        email: false,
        sound: true,
        keep: true,
        clear: false,
        lock: false,
        finger: true,
    });

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'Setting',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#1F1C2C', shadowColor: 'transparent' },
            headerLeft: () => (
                <TouchableOpacity style={{ marginLeft: 20 }} onPress={navigation.goBack}>
                    <AntDesign name="arrowleft" size={24} color="white" />
                </TouchableOpacity>
            )
        });
    }, [navigation])

    const toggleSwitch = value => {
        switch (value) {
            case 'push':
                setIsEnabled({ ...isEnabled, push: !isEnabled.push })
                break;
            case 'email':
                setIsEnabled({ ...isEnabled, email: !isEnabled.email })
                break;
            case 'sound':
                setIsEnabled({ ...isEnabled, sound: !isEnabled.sound })
                break;
            case 'keep':
                setIsEnabled({ ...isEnabled, keep: !isEnabled.keep })
                break;
            case 'clear':
                setIsEnabled({ ...isEnabled, clear: !isEnabled.clear })
                break;
            case 'lock':
                setIsEnabled({ ...isEnabled, lock: !isEnabled.lock })
                break;
            case 'finger':
                setIsEnabled({ ...isEnabled, finger: !isEnabled.finger })
                break;
            default:
                break;
        }
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.box}>
                <View style={styles.contain}>
                    <Text style={styles.title}>General</Text>
                    <View style={styles.part}>
                        <View style={styles.row}>
                            <MaterialIcons style={styles.icon} name="notifications-on" size={24} color="#00D369" />
                            <Text style={styles.name}>Push notifications</Text>
                            <Switch
                                trackColor={{ false: "#f4f3f4", true: "#00D369" }}
                                thumbColor="#f4f3f4"
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={() => toggleSwitch('push')}
                                value={isEnabled.push}
                            />
                        </View>
                        <View style={styles.row}>
                            <MaterialIcons style={styles.icon} name="alternate-email" size={24} color="#d6564d" />
                            <Text style={styles.name}>Email notifications</Text>
                            <Switch
                                trackColor={{ false: "#f4f3f4", true: "#00D369" }}
                                thumbColor="#f4f3f4"
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={() => toggleSwitch('email')}
                                value={isEnabled.email}
                            />
                        </View>
                        <View style={styles.row}>
                            <MaterialIcons style={styles.icon} name="surround-sound" size={24} color="blue" />
                            <Text style={styles.name}>In-App Sounds</Text>
                            <Switch
                                trackColor={{ false: "#f4f3f4", true: "#00D369" }}
                                thumbColor="#f4f3f4"
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={() => toggleSwitch('sound')}
                                value={isEnabled.sound}
                            />
                        </View>
                        <View style={[styles.row, { marginVertical: 0, marginTop: 10 }]}>
                            <MaterialIcons style={styles.icon} name="update" size={24} color="grey" />
                            <Text style={styles.name}>Keep app up to date</Text>
                            <Switch
                                trackColor={{ false: "#f4f3f4", true: "#00D369" }}
                                thumbColor="#f4f3f4"
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={() => toggleSwitch('keep')}
                                value={isEnabled.keep}
                            />
                        </View>
                    </View>
                    <Text style={styles.title}>Secure</Text>
                    <View style={styles.part}>
                        <View style={styles.row}>
                            <MaterialIcons style={styles.icon} name="cached" size={24} color="#0b7178" />
                            <Text style={styles.name}>Auto clear cache</Text>
                            <Switch
                                trackColor={{ false: "#f4f3f4", true: "#00D369" }}
                                thumbColor="#f4f3f4"
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={() => toggleSwitch('clear')}
                                value={isEnabled.clear}
                            />
                        </View>
                        <View style={styles.row}>
                            <MaterialIcons style={styles.icon} name="lock" size={24} color="#186b40" />
                            <Text style={styles.name}>Lock app in background</Text>
                            <Switch
                                trackColor={{ false: "#f4f3f4", true: "#00D369" }}
                                thumbColor="#f4f3f4"
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={() => toggleSwitch('lock')}
                                value={isEnabled.lock}
                            />
                        </View>
                        <View style={[styles.row, { marginVertical: 0, marginTop: 10 }]}>
                            <MaterialIcons style={styles.icon} name="fingerprint" size={24} color="#d6564d" />
                            <Text style={styles.name}>Use Fingerprint</Text>
                            <Switch
                                trackColor={{ false: "#f4f3f4", true: "#00D369" }}
                                thumbColor="#f4f3f4"
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={() => toggleSwitch('finger')}
                                value={isEnabled.finger}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

export default SettingSreen;
