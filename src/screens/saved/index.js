import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import styles from './styles';
import SavedItem from '../../components/SavedItem.js';
import { useSelector, useDispatch } from 'react-redux';
import { favorite, unFavorite } from '../../features/appFavorite';

const SavedSreen = () => {
    const listFavorite = useSelector(favorite);
    const dispatch = useDispatch();
    const [data, setData] = useState([])

    useEffect(() => {
        setData(listFavorite)
    }, [listFavorite]);


    const onDelete = (id, name) => {
        let array = data;
        array = data.filter((data, index) => index !== id)
        setData(array);
        dispatch(unFavorite({
            name
        }))
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
