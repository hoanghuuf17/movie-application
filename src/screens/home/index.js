import React, { useState } from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, Pressable, FlatList, Modal, ActivityIndicator, ScrollView, } from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import RecommendItem from '../../components/RecommendItem.js';
import Entypo from 'react-native-vector-icons/Entypo';
import { movies, popular, recommended } from '../../data/movies.js';
import CarouselItem from '../../components/CarouselItem.js';

const HomeSreen = ({ navigation }) => {
    const [state, setState] = useState({
        filter: 'All',
        modal: false,
        popular: popular,
        recommended: recommended
    })
    const filter = ['All', 'Action', 'Comedy', 'Horor'];

    const fillerHandle = type => {
        setState({ ...state, modal: true });
        if (type === 'All') {
            setTimeout(() => {
                setState({ filter: type, modal: false, popular, recommended });

            }, 700)
        } else {
            let b = popular.filter(movie => movie.type === type)
            let c = recommended.filter(movie => movie.type === type)
            setTimeout(() => {
                setState({ filter: type, modal: false, popular: b, recommended: c });
            }, 500)
        }

    }

    return (
        <SafeAreaView style={styles.container}>
            <Modal
                transparent={true}
                animationType={'none'}
                visible={state.modal}>
                <View style={{ flex: 1, backgroundColor: '#000', opacity: 0.5, alignItems: 'center', justifyContent: 'center' }} >
                    <ActivityIndicator size="large" color="#fff" />
                </View>
            </Modal>
            <View style={styles.box}>
                <View style={styles.header}>
                    <Text style={styles.title}>Hi, Hoang</Text>
                </View>
                <View style={styles.filter}>
                    {filter.map((type, index) => (
                        <Pressable key={index} style={state.filter === type ? styles.filterActive : styles.filterPress} onPress={() => fillerHandle(type)}>
                            <Text style={styles.filterText}>{type}</Text>
                        </Pressable>
                    ))}
                    <TouchableOpacity style={styles.filterBtn}>
                        <AntDesign name="filter" size={25} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.oustanding}>
                    <CarouselItem movies={movies} />
                </View>
                <View style={styles.popular}>
                    <View style={styles.popularHeader}>
                        <Text style={styles.popularTitle}>Popular</Text>
                        <Entypo name="dots-three-horizontal" size={23} color="#FF6802" />
                    </View>
                    <FlatList
                        data={state.popular}
                        renderItem={({ item }) =>
                            <RecommendItem item={item} size={170} onPress={() => navigation.navigate('Detail',
                                { name: item.name, image: item.image, info: item.info, description: item.description, actors: item.actors, link: item.link }
                            )} />}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={({ id }) => id}
                        horizontal={true}
                    />
                </View>
                <View style={styles.maylike}>
                    <View style={styles.popularHeader}>
                        <Text style={styles.popularTitle}>You may like</Text>
                        <Entypo name="dots-three-horizontal" size={23} color="#FF6802" />
                    </View>
                    <FlatList
                        data={state.recommended}
                        renderItem={({ item }) =>
                            <RecommendItem item={item} size={130} onPress={() => navigation.navigate('Detail',
                                { name: item.name, image: item.image, info: item.info, description: item.description, actors: item.actors, link: item.link })} />}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={({ id }) => id}
                        horizontal={true}
                    />
                </View>
                <View style={styles.nothing}></View>
            </View>
        </SafeAreaView>
    );
}


export default HomeSreen;
