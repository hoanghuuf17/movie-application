import React, { useRef, useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';

const SLIDER_WIDTH = Dimensions.get('window').width - 40;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH);
const CarouselItem = ({movies}) => {
    const navigation = useNavigation();
    const [index, setIndex] = useState(0);
    const isCarousel = useRef(null);

    return (
        <>
            <Carousel
                layout={'stack'}
                layoutCardOffset={9}
                ref={isCarousel}
                data={movies}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                inactiveSlideShift={0}
                useScrollView={true}
                autoplay={true}
                loop={true}
                autoplayDelay={1000}
                autoplayInterval={3000}
                onSnapToItem={(index) => setIndex(index)}
                renderItem={({ index, item }) => {
                    const { id, name, image, info, description, actors, link } = item;
                    return (
                        <View key={index} style={styles.ostItem}>
                            <Image style={styles.ostImg} source={{ url: image }} />
                            <Text style={styles.ostName}>{name}</Text>
                            <Text style={styles.ostRating}><Entypo name="star" size={25} color="#EFCD09" /> 5.0</Text>
                            <TouchableOpacity
                                style={styles.playBtn}
                                onPress={() => navigation.navigate('Detail', { id, name, image, info, description, actors, link })}>
                                <Entypo name="controller-play" size={28} color="#FF6802" />
                            </TouchableOpacity>
                        </View>)
                }}
            />
            <Pagination
                dotsLength={movies.length}
                activeDotIndex={index}
                carouselRef={isCarousel}
                containerStyle={{
                    marginVertical: -40,
                    top: 15
                }}
                dotStyle={{
                    width: 8,
                    height: 8,
                    borderRadius: 5,
                    marginHorizontal: -5,
                    backgroundColor: '#fff',
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
                tappableDots={true}
            />
        </>
    )
}

export default CarouselItem

const styles = StyleSheet.create({
    ostItem: {
        flex: 1,
    },
    ostImg: {
        width: SLIDER_WIDTH,
        flex: 1,
        borderRadius: 20,
        resizeMode: 'cover'
    },
    ostName: {
        color: 'white',
        position: 'absolute',
        bottom: 65,
        left: 30,
        fontWeight: '600',
        fontSize: 20,
    },
    ostRating: {
        color: 'white',
        position: 'absolute',
        bottom: 40,
        left: 30,
    },
    playBtn: {
        position: 'absolute',
        bottom: 45,
        right: 40,
        backgroundColor: 'white',
        borderRadius: 50,
        alignItems: 'center',
        padding: 3
    },
})
