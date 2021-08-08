import React, { useLayoutEffect, useState } from 'react';
import { View, SafeAreaView, TouchableOpacity, Image, Text, FlatList } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import CastItem from '../../components/CastItem.js';
import RecommendItem from '../../components/RecommendItem.js';
import styles from './styles';
const Captain = '../../images/captain3.jpg';

const DetailSreen = ({ route, navigation }) => {
    const { name, image, info, description, actors } = route.params
    const [heart, setHeart] = useState(true)
    const cast = [
        {
            id: 1,
            role: 'Actor',
            name: 'Chris Evans',
            image: require('../../images/chris.png')
        },
        {
            id: 2,
            role: 'Actor',
            name: 'Samuel L. Jackson',
            image: require('../../images/samuel.png')

        },
        {
            id: 3,
            role: 'Actor',
            name: 'Robert Downey Jr',
            image: require('../../images/robert.png')
        }
    ]

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: false,
            headerStyle: { backgroundColor: '#1F1C2C', shadowColor: 'transparent' },
            headerLeft: () => (
                <TouchableOpacity style={{ marginLeft: 20 }} onPress={navigation.goBack}>
                    <AntDesign name="arrowleft" size={24} color="white" />
                </TouchableOpacity>
            ),
            headerRight: () => (
                <TouchableOpacity style={{ marginRight: 20 }} onPress={() => setHeart(!heart)}>
                    <AntDesign name={heart ? 'hearto' : 'heart'} size={24} color='white' />
                </TouchableOpacity>
            ),
        })
    }, [navigation, heart])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.box}>
                <View style={styles.poster}>
                    <Image style={styles.posterImg} source={image} />
                    <Text style={styles.posterRating}><Entypo name="star" size={25} color="#EFCD09" /> 5.0</Text>
                    <View style={styles.posterBgr}>
                        <TouchableOpacity style={styles.playBtn}>
                            <Entypo name="controller-play" size={28} color="#FF6802" />
                        </TouchableOpacity>
                        <Text style={styles.watchNow}>Watch now</Text>
                    </View>
                </View>
                <View style={styles.infos}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.info}>{info}</Text>
                </View>
                <View style={styles.line}></View>
                <View style={styles.detail}>
                    <Text style={styles.detailTitle}>Story line</Text>
                    <Text style={styles.detailContent}>{description}</Text>
                </View>
                <View style={styles.cast}>
                    <Text style={styles.castTitle}>Star cast</Text>
                    <FlatList
                        data={actors}
                        renderItem={({ item }) => <CastItem item={item} />}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={item => item.id}
                        horizontal={true}
                    />
                </View>
                <View style={styles.recommended}>
                    <Text style={styles.recommendedTitle}>Recommended</Text>
                    <FlatList
                        data={cast}
                        renderItem={({ item }) => <RecommendItem item={item} size={130} onPress={() => navigation.navigate('Detail')} />}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={item => item.id}
                        horizontal={true}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}


export default DetailSreen;
