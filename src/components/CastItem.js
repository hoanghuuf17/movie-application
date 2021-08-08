import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';

const CastItem = ({ item }) => {
    const { role, name, image } = item;

    return (
        <View style={styles.container}>
            <Avatar
                size={50}
                rounded
                source={{ url: image }}
            />
            <View style={styles.info}>
                <Text style={styles.role}>{role}</Text>
                <Text style={styles.name}>{name}</Text>
            </View>
        </View>
    )
}

export default CastItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    info: {
        marginHorizontal: 12
    },
    role: {
        color: '#9c9c9c',
        fontWeight: '500'
    },
    name: {
        color: 'white',
        fontWeight: '500'
    }
})
