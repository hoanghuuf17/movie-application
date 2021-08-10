import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

const SearchItem = ({ doc }) => {
    const navigation = useNavigation();
    const { name, image, info, description, actors, link } = doc

    return (
        <TouchableOpacity activeOpacity={0.5} style={styles.container} onPress={() => navigation.navigate('Detail',
            { name, image, info, description, actors, link })}>
            <Image source={{ url: image }} style={styles.image} />
            <View style={{ flex: 6.5 }}>
                <View style={styles.detail}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.info}>{info}</Text>
                </View>
                <View style={styles.btns}>
                    <Text style={styles.rating}><Entypo name="star" size={20} color="#EFCD09" />4.5</Text>
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
        marginBottom: 10,
        justifyContent: 'space-between',
        padding: 10,
        flex: 1
    },
    image: {
        height: 120,
        width: 120,
        borderRadius: 15,
        flex: 3.5
    },
    detail: {
        justifyContent: 'space-between',
        marginLeft: 10,
        flex: 5
    },
    name: {
        color: 'white',
        fontWeight: '600',
        fontSize: 20,
    },
    info: {
        color: '#262626',
        bottom: 10
    },
    rating: {
        color: 'white',
        fontWeight: '600',
    },
    btns: {
        justifyContent: 'space-between',
        marginRight: 0,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10
    },
    playBtn: {
        backgroundColor: 'white',
        borderRadius: 50,
        padding: 3,
    },
})
