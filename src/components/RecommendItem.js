import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import {Avatar} from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo';
const Hp = '../images/hp7.png';

const RecommendItem = ({size, item, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.5} style={styles.poItem} >
            <Avatar size={size} avatarStyle={styles.poImg} source={require(Hp)} />
            <View style={styles.itemBar}>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={[styles.itemName, { fontWeight: '500', fontSize: 12, }]}>Harry Potter 7</Text>
                    <Text style={[styles.itemRating, { fontWeight: '500', fontSize: 12, }]}><Entypo name="star" size={15} color="#EFCD09" /> 4.5</Text>
                </View>
                <TouchableOpacity style={[styles.itemplayBtn, { marginLeft: 7, marginRight: 5, }]}>
                    <Entypo name="controller-play" size={18} color="#FF6802" />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

export default RecommendItem

const styles = StyleSheet.create({
    poItem: {
        alignItems: 'center',
        borderRadius: 50,
        marginRight: 10,
    },
    poImg: {
        borderRadius: 20,
    },
    itemBar: {
        borderRadius: 20,
        bottom: 45,
        width: '90%', 
        padding: 5,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF50',
        alignItems: 'center'
    },
    itemName: {
        color: 'white',
        fontWeight: '600',
        fontSize: 15,
    },
    itemRating: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    },
    itemplayBtn: {
        backgroundColor: 'white',
        borderRadius: 50,
        alignItems: 'center',
        height: 20,
        marginLeft: 20,
        marginRight: 10,
    }
})
