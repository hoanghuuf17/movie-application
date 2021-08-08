import React, { useState, useRef } from 'react';
import { View, SafeAreaView, ScrollView, Text, TouchableOpacity, Pressable, Image, FlatList, Animated } from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import RecommendItem from '../../components/RecommendItem.js';
import Entypo from 'react-native-vector-icons/Entypo';
import { movies, popular, recommended } from '../../data/movies.js';

const HomeSreen = ({ navigation }) => {
    const [active, setActive] = useState(0);

    const change = ({ nativeEvent }) => {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if (slide !== active) {
            setActive(slide)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.box}>
                <View style={styles.header}>
                    <Text style={styles.title}>Hi, Hoang</Text>
                </View>
                <View style={styles.filter}>
                    <Pressable style={[styles.filterPress, { backgroundColor: "#843623", padding: 10, borderRadius: 15 }]}>
                        <Text style={styles.filterText}>All</Text>
                    </Pressable>
                    <Pressable style={styles.filterPress}>
                        <Text style={styles.filterText}>Action</Text>
                    </Pressable>
                    <Pressable style={styles.filterPress}>
                        <Text style={styles.filterText}>Comedy</Text>
                    </Pressable>
                    <Pressable style={styles.filterPress}>
                        <Text style={styles.filterText}>Horor</Text>
                    </Pressable>
                    <TouchableOpacity style={styles.filterBtn}>
                        <AntDesign name="filter" size={25} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={{
                    flex: 3,
                    padding: 20,
                }}>
                    <ScrollView
                        pagingEnabled
                        onScroll={change}
                        scrollEventThrottle={0}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}>
                        {
                            movies.map(({ id, name, image, info, description, actors }) => (
                                <View key={id} style={styles.ostItem}>
                                    <Image style={styles.ostImg} source={{ url: image }} />
                                    <Text style={styles.ostName}>{name}</Text>
                                    <Text style={styles.ostRating}><Entypo name="star" size={25} color="#EFCD09" /> 5.0</Text>
                                    <TouchableOpacity
                                        style={styles.playBtn}
                                        onPress={() => navigation.navigate('Detail', { id, name, image, info, description, actors })}>
                                        <Entypo name="controller-play" size={28} color="#FF6802" />
                                    </TouchableOpacity>
                                </View>
                            ))
                        }
                    </ScrollView>
                    <View style={styles.pagpination}>
                        {
                            movies.map(({ id }) => (
                                <Text key={id} style={active === id ? styles.paginTextActive : styles.paginText}>●</Text>
                            ))
                        }
                    </View>
                </View>

                <View style={styles.popular}>
                    <View style={styles.popularHeader}>
                        <Text style={styles.popularTitle}>Popular</Text>
                        <Entypo name="dots-three-horizontal" size={23} color="#FF6802" />
                    </View>
                    <FlatList
                        data={popular}
                        renderItem={({ item }) =>
                            <RecommendItem item={item} size={170} onPress={() => navigation.navigate('Detail',
                                { name: item.name, image: item.image, info: item.info, description: item.description, actors: item.actors }
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
                        data={recommended}
                        renderItem={({ item }) =>
                            <RecommendItem item={item} size={130} onPress={() => navigation.navigate('Detail',
                                { name: item.name, image: item.image, info: item.info, description: item.description, actors: item.actors })} />}
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
