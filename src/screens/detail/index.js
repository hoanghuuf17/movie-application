import React, { useLayoutEffect, useState } from 'react';
import { View, SafeAreaView, TouchableOpacity, Image, Text, FlatList } from 'react-native';
import { WebView } from 'react-native-webview';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import CastItem from '../../components/CastItem.js';
import RecommendItem from '../../components/RecommendItem.js';
import styles from './styles';
import { recommended } from '../../data/movies.js';
import { useSelector, useDispatch } from 'react-redux';
import { favorite, addFavorite, unFavorite } from '../../features/appFavorite';

const DetailSreen = ({ route, navigation }) => {
    const list = useSelector(favorite);
    const dispatch = useDispatch()

    const { name, image, info, description, actors } = route.params
    const [heart, setHeart] = useState(false);
    const [webView, setWebView] = useState(false);

    const addToFavorite = () => {
        dispatch(addFavorite({ name, image, info, description, actors }));
        setHeart(!heart);
    }

    const removeFavorite = () => {
        dispatch(unFavorite({ name }));
        setHeart(!heart);
    }

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
                <TouchableOpacity style={{ marginRight: 20 }} onPress={() => heart ? removeFavorite() : addToFavorite()}>
                    <AntDesign name={heart ? 'heart' : 'hearto'} size={24} color='white' />
                </TouchableOpacity>
            ),
        });
        list.find(mv => mv.name === name ? setHeart(true) : '')
    }, [navigation, heart])

    return (
        <SafeAreaView style={styles.container}>
            {webView ? <WebView
                incognito={true}
                style={{ flex: 1 }}
                source={{ url: `https://www.moviefone.com/search/${name}` }} /> :
                <View style={styles.box}>
                    <View style={styles.poster}>
                        <Image style={styles.posterImg} source={{ uri: image }} />
                        <Text style={styles.posterRating}><Entypo name="star" size={25} color="#EFCD09" /> 5.0</Text>
                        <View style={styles.posterBgr}>
                            <TouchableOpacity style={styles.playBtn} onPress={() => setWebView(!webView)}>
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
                            data={recommended}
                            renderItem={({ item }) =>
                                <RecommendItem item={item} size={130} onPress={() => navigation.navigate('Detail',
                                    { name: item.name, image: item.image, info: item.info, description: item.description, actors: item.actors })} />}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={({ id }) => id}
                            horizontal={true}
                        />
                    </View>
                </View>}
        </SafeAreaView>
    );
}


export default DetailSreen;
