import React from 'react';
import { View, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './styles';
const Pic = '../../images/avatar.jpg';

const ProfileSreen = () => {
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
                    <Text style={styles.firstName}>Hoang Toddy</Text>
                    <Text style={styles.lastName}>Trinh Huu</Text>
                </View>
                <View style={styles.contain}>
                    <TouchableOpacity activeOpacity={0.5} style={styles.row}>
                        <Foundation style={styles.rowIconLeft} name="info" size={33} color='white' />
                        <Text style={styles.rowTitle}>My Info</Text>
                        <MaterialIcons style={styles.rowIconRight} name='keyboard-arrow-right' size={25} color='white' />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.5} style={styles.row}>
                        <Ionicons style={styles.rowIconLeft} name="settings" size={30} color='white' />
                        <Text style={styles.rowTitle}>Setting</Text>
                        <MaterialIcons style={styles.rowIconRight} name='keyboard-arrow-right' size={25} color='white' />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.5} style={styles.row}>
                        <MaterialIcons style={styles.rowIconLeft} name="policy" size={30} color='white' />
                        <Text style={styles.rowTitle}>Policy</Text>
                        <MaterialIcons style={styles.rowIconRight} name='keyboard-arrow-right' size={25} color='white' />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.5} style={[styles.row,{width: '40%'}]}>
                        <AntDesign style={styles.rowIconLeft} name="logout" size={25} color='#FF4C55' />
                        <Text style={[styles.rowTitle,{left: 10}]}>Sign Out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default ProfileSreen;
