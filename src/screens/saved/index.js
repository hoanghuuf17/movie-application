import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import styles from './styles';
import SavedItem from '../../components/SavedItem.js';
import { useSelector } from 'react-redux';
import { favorite } from '../../features/appFavorite';

const SavedSreen = () => {
    const listFavorite = useSelector(favorite);
    const [data, setData] = useState([])

    useEffect(() => {
        setData(listFavorite)
    }, [listFavorite]);


    const onDelete = id => {
        let array = data;
        array = data.filter((data, index) => index !== id)
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
                                data.map((doc, index) => {
                                    return (<SavedItem key={index} id={index} doc={doc} onDelete={onDelete} />)
                                })}
                        </ScrollView>
                    </>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default SavedSreen;
