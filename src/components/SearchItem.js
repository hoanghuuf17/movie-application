import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Hp = '../images/hp7.png';


const SearchItem = ({ name, rating, info }) => {
    return (
        <TouchableOpacity activeOpacity={0.5} style={styles.container}>
            <Image source={require(Hp)} style={styles.image} />
            <View style={{ flexDirection: 'row' }}>
                <View style={{ justifyContent: 'space-between', padding: 10 }}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.info}>{info}</Text>
                    <Text style={styles.rating}><Entypo name="star" size={20} color="#EFCD09" /> {rating}</Text>
                </View>
                <View style={styles.btns}>
                    <MaterialCommunityIcons name='tag-multiple-outline' size={28} color='white' />
                    <TouchableOpacity style={styles.playBtn}>
                        <Entypo name="controller-play" size={28} color="#FF6802" />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default SearchItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#817884',
        borderRadius: 20,
        marginBottom: 10
    },
    image: {
        height: 120,
        width: 120,
        margin: 10,
        borderRadius: 15
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
        padding: 20
    },
    playBtn: {
        backgroundColor: 'white',
        borderRadius: 50,
        padding: 3,
    },
})
