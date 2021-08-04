import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import styles from './styles';
import SavedItem from '../../components/SavedItem.js';

const SavedSreen = () => {
    const [data, setData] = useState([
        {
            id: 1,
            name: 'Harry Potter 7',
            rating: 4.5,
            info: 'Eng | Fiction | 2h10m'
        },
        {
            id: 2,
            name: 'Iron Man 3',
            rating: 5.0,
            info: 'Eng | Action | 1h30m'
        },
    ])

    const onDelete = id => {
        let array = data;
        array = data.filter(d => d.id !== id)
        setData(array);
    }


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.box}>
                <View style={styles.header}>
                    <Text style={styles.title}>All</Text>
                </View>
                <View style={styles.contain}>
                    <>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            {data &&
                                data.map((doc) => {
                                    const { id, name, rating, info } = doc;
                                    return (<SavedItem key={id} id={id} name={name} rating={rating} info={info} onDelete={onDelete} />)
                                })}
                        </ScrollView>
                    </>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default SavedSreen;
