import React from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, Pressable, FlatList } from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import RecommendItem from '../../components/RecommendItem.js';
import Entypo from 'react-native-vector-icons/Entypo';
import { popular, recommended } from '../../data/movies.js';
import CarouselItem from '../../components/CarouselItem.js';

const HomeSreen = ({ navigation }) => {
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
                <View style={styles.oustanding}>
                    <CarouselItem />
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
