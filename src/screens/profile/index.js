import React from 'react';
import { View, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
const Pic = '../../images/avatar.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../features/appAuth';
import { userInfo } from '../../features/appUser';

const ProfileSreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const info = useSelector(userInfo);

    const siggOutHandle = () => {
        dispatch(signOut())
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.box}>
                <View style={styles.header}>
                    <Avatar
                        size={130}
                        rounded
                        source={require(Pic)} />
                    <View style={styles.line}></View>
                    <View style={styles.duration}>
                        <Text style={[styles.durationText, { color: '#9c9c9c' }]}>Joined</Text>
                        <Text style={styles.durationText}>2 mon ago</Text>
                    </View>
                </View>
                <View style={styles.name}>
                    <Text style={styles.firstName}>{info.firstName}</Text>
                    <Text style={styles.lastName}>{info.lastName}</Text>
                </View>
                <View style={styles.contain}>
                    <TouchableOpacity activeOpacity={0.5} style={styles.row} onPress={() => navigation.navigate('Info')}>
                        <Foundation style={styles.rowIconLeft} name="info" size={33} color='white' />
                        <Text style={styles.rowTitle}>Profile</Text>
                        <MaterialIcons style={styles.rowIconRight} name='keyboard-arrow-right' size={25} color='white' />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.5} style={styles.row} onPress={() => navigation.navigate('Setting')}>
                        <Ionicons style={styles.rowIconLeft} name="settings" size={30} color='white' />
                        <Text style={styles.rowTitle}>Setting</Text>
                        <MaterialIcons style={styles.rowIconRight} name='keyboard-arrow-right' size={25} color='white' />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.5} style={styles.row} onPress={() => navigation.navigate('Policy')}>
                        <MaterialIcons style={styles.rowIconLeft} name="policy" size={30} color='white' />
                        <Text style={styles.rowTitle}>Policy</Text>
                        <MaterialIcons style={styles.rowIconRight} name='keyboard-arrow-right' size={25} color='white' />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.5} style={[styles.row, { width: '40%' }]} onPress={siggOutHandle}>
                        <AntDesign style={styles.rowIconLeft} name="logout" size={25} color='#FF4C55' />
                        <Text style={[styles.rowTitle, { left: 10 }]}>Sign Out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default ProfileSreen;
