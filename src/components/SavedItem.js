import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
const Hp = '../images/hp7.png';


const SavedItem = ({ id, name, rating, info, onDelete }) => {
    return (
        <TouchableOpacity activeOpacity={0.5} style={styles.container}>
            <Image source={require(Hp)} style={styles.image} />
            <View style={styles.detail}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.info}>{info}</Text>
                <Text style={styles.rating}><Entypo name="star" size={20} color="#EFCD09" /> {rating}</Text>
            </View>
            <View style={styles.btns}>
                <TouchableOpacity onPress={() => onDelete(id)}>
                    <Feather name='delete' size={28} color='white' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.playBtn}>
                    <Entypo name="controller-play" size={28} color="#FF6802" />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

export default SavedItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#817884',
        borderRadius: 20,
        marginBottom: 10,
        justifyContent: 'space-between',
        padding: 10
    },
    image: {
        height: 120,
        width: 120,
        borderRadius: 15
    },
    detail: {
        justifyContent: 'space-between',
        marginLeft: -40
    },
    name: {
        color: 'white',
        fontWeight: '600',
        fontSize: 20,
    },
    info: {
        color: '#262626'
    },
    rating: {
        color: 'white',
        fontWeight: '600',
    },
    btns: {
        justifyContent: 'space-between',
        marginRight: 0
    },
    playBtn: {
        backgroundColor: 'white',
        borderRadius: 50,
        padding: 3,
    },
})
