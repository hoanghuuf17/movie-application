import React from 'react';
import { View, SafeAreaView, ScrollView, Text, TouchableOpacity, Pressable, Image, FlatList } from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import RecommendItem from '../../components/RecommendItem.js';
import Entypo from 'react-native-vector-icons/Entypo';
const Captain = '../../images/captain3.jpg';
const Hp = '../../images/hp7.png';

const HomeSreen = ({ navigation }) => {
    const popular = [1, 2, 3];
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
                    <Image style={styles.ostImg} source={require(Captain)} />
                    <Text style={styles.ostName}>Captain Ameraica: civil war</Text>
                    <Text style={styles.ostRating}><Entypo name="star" size={25} color="#EFCD09" /> 5.0</Text>
                    <TouchableOpacity style={styles.playBtn}>
                        <Entypo name="controller-play" size={28} color="#FF6802" />
                    </TouchableOpacity>
                </View>
                <View style={styles.popular}>
                    <View style={styles.popularHeader}>
                        <Text style={styles.popularTitle}>Popular</Text>
                        <Entypo name="dots-three-horizontal" size={23} color="#FF6802" />
                    </View>
                    <FlatList
                        data={popular}
                        renderItem={({ item }) => <RecommendItem size={170} onPress={() => navigation.navigate('Detail')} />}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(index) => index}
                        horizontal={true}
                    />
                </View>
                <View style={styles.maylike}>
                    <View style={styles.popularHeader}>
                        <Text style={styles.popularTitle}>You may like</Text>
                        <Entypo name="dots-three-horizontal" size={23} color="#FF6802" />
                    </View>
                    <FlatList
                        data={popular}
                        renderItem={({ item }) => <RecommendItem size={130} onPress={() => navigation.navigate('Detail')} />}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(index) => index}
                        horizontal={true}
                    />
                </View>
                <View style={styles.nothing}></View>
            </View>
        </SafeAreaView>
    );
}


export default HomeSreen;
