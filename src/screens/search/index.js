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
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import SearchItem from './../../components/SearchItem.js';

const SearchSreen = () => {
    const [data, setData] = useState([
        {
            name: 'Harry Potter 7',
            rating: 4.5,
            info: 'Eng | Fiction | 2h10m'
        },
        {
            name: 'Iron Man 3',
            rating: 5.0,
            info: 'Eng | Action | 1h30m'
        },
    ])

    const [result, setResult] = useState(data)
    const [input, setInput] = useState('')

    const search = (text) => {
        if (text) {
            const newData = data.filter(
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
                                            const { name, rating, info } = doc;
                                            return (<SearchItem key={index} name={name} rating={rating} info={info}/>)
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
