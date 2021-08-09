import React, { useState } from 'react';
import {
    Text,
    TextInput,
    View, SafeAreaView,
    ScrollView,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    TouchableOpacity
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import SearchItem from './../../components/SearchItem.js';
import { movies, popular, recommended } from '../../data/movies.js';
import { useSelector, useDispatch } from 'react-redux';
import { favorite } from '../../features/appFavorite';
import { addFavorite } from '../../features/appFavorite';


const SearchSreen = () => {
    const dispatch = useDispatch();
    const addToFavorite = (doc) => {
        dispatch(addFavorite({
            name: doc.name,
            image: doc.image,
            info: doc.info,
            description: doc.description,
            actors: doc.actors,
        }));
    }

    let array = []
    let list = array.concat(movies, popular, recommended)
    const [data, setData] = useState(list.splice(0, 2))

    const [result, setResult] = useState(data)
    const [input, setInput] = useState('')

    const search = (text) => {
        if (text) {
            const newData = list.filter(
                function (item) {
                    const itemData = item.name
                        ? item.name.toUpperCase()
                        : ''.toUpperCase();
                    const textData = text.toUpperCase();
                    return itemData.indexOf(textData) > -1;
                });
            setResult(newData);
            setInput(text);
        } else {
            setResult(data);
            setInput(text);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.box}>
                <View style={styles.header}>
                    <Text style={styles.title}>Hi, Hoang</Text>
                </View>
                <View style={styles.searchBar}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Search movie, series"
                        placeholderTextColor="#ddd"
                        onChangeText={(text) => search(text)}
                    />
                    <TouchableOpacity style={styles.btnSearch} activeOpacity={0.5}>
                        <FontAwesome name="search" size={20} color='white' />
                    </TouchableOpacity>
                </View>
                <View style={styles.content}>
                    <KeyboardAvoidingView
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                        style={styles.container}
                        keyboardVerticalOffset={90}>
                        <TouchableWithoutFeedback keyboard="dismiss">
                            <>
                                <ScrollView showsVerticalScrollIndicator={false}>
                                    {result &&
                                        result.map((doc, index) => {
                                            return (<SearchItem
                                                key={index}
                                                doc={doc}
                                                onPress={addToFavorite}
                                            />)
                                        })}
                                </ScrollView>
                            </>
                        </TouchableWithoutFeedback>
                    </KeyboardAvoidingView>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default SearchSreen;
