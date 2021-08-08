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
import { movies, popular, recommended } from '../../data/movies.js'


const SearchSreen = () => {
    let array = []
    let list = array.concat(movies, popular, recommended)
    const [data, setData] = useState(list.splice(0,2))

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
                                            const { name, info, image } = doc;
                                            return (<SearchItem key={index} name={name} info={info} image={image} />)
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
