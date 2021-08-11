import React, { useLayoutEffect, useState } from 'react';
import { View, SafeAreaView, TouchableOpacity, Image, Text, FlatList, Dimensions, Pressable } from 'react-native';
import { WebView } from 'react-native-webview';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import CastItem from '../../components/CastItem.js';
import RecommendItem from '../../components/RecommendItem.js';
import Modal from 'react-native-modal'
import styles from './styles';
import { recommended } from '../../data/movies.js';
import { useSelector, useDispatch } from 'react-redux';
import { favorite, addFavorite, unFavorite } from '../../features/appFavorite';
const deviceWidth = Dimensions.get('window').width;

const DetailSreen = ({ route, navigation }) => {
    const list = useSelector(favorite);
    const dispatch = useDispatch()
    const { name, image, info, description, actors, link } = route.params
    const [state, setState] = useState({
        heart: false,
        webView: false,
        modal: false,
    })

    const addToFavorite = () => {
        dispatch(addFavorite({ name, image, info, description, actors }));
        setState({ ...state, heart: !state.heart });
    }

    const removeFavorite = () => {
        dispatch(unFavorite({ name }));
        setState({ ...state, heart: !state.heart });
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
                <TouchableOpacity style={{ marginRight: 20 }} onPress={() => state.heart ? removeFavorite() : addToFavorite()}>
                    <AntDesign name={state.heart ? 'heart' : 'hearto'} size={24} color='white' />
                </TouchableOpacity>
            ),
        });
        list.find(mv => mv.name === name ? setState({ ...state, heart: true }) : '')
    }, [navigation, state.heart])

    return (
        <SafeAreaView style={styles.container}>
            {state.webView ?
                <Modal
                    animationIn={'slideInUp'}
                    animationOut={'slideOutDown'}
                    animationInTiming={600}
                    animationOutTiming={600}
                    style={{ flex: 1, backgroundColor: '#000' }}
                    deviceWidth={deviceWidth}
                    isVisible={state.modal}>
                    <View style={{ height: '90%' }}>
                        <WebView
                            incognito={true}
                            style={{ height: '50%' }}
                            source={{ url: link }} />
                        <Pressable style={{ alignItems: 'center', top: 10 }} onPress={() => setState({ ...state, modal: false, webView: false })}>
                            <MaterialIcons name="cancel" size={30} color='white' />
                        </Pressable>

                    </View>
                </Modal>
                :
                <View style={styles.box}>
                    <View style={styles.poster}>
                        <Image style={styles.posterImg} source={{ uri: image }} />
                        <Text style={styles.posterRating}><Entypo name="star" size={25} color="#EFCD09" /> 5.0</Text>
                        <View style={styles.posterBgr}>
                            <TouchableOpacity style={styles.playBtn} onPress={() => {
                                setState({ ...state, modal: !state.modal, webView: !state.webView })
                            }}>
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
