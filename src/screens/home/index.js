import React from 'react';
import { View, SafeAreaView, ScrollView, Text, TouchableOpacity, Pressable, Image } from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
const Captain = '../../images/captain3.jpg';
const Hp = '../../images/hp7.png';

const HomeSreen = () => {
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
                    <View style={{ flex: 1 }}>
                        <ScrollView
                            contentContainerStyle={styles.scrStyle}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}>
                            {popular.map((index) => (
                                <TouchableOpacity activeOpacity={0.5} style={styles.poItem} key={index}>
                                    <Image style={styles.poImg} source={require(Hp)} />
                                    <View style={styles.itemBar}>
                                        <View style={{ flexDirection: 'column' }}>
                                            <Text style={styles.itemName}>Harry Potter 7</Text>
                                            <Text style={styles.itemRating}><Entypo name="star" size={18} color="#EFCD09" /> 4.5</Text>
                                        </View>
                                        <TouchableOpacity style={styles.itemplayBtn}>
                                            <Entypo name="controller-play" size={18} color="#FF6802" />
                                        </TouchableOpacity>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>
                </View>
                <View style={styles.maylike}>
                    <View style={styles.popularHeader}>
                        <Text style={styles.popularTitle}>You may like</Text>
                        <Entypo name="dots-three-horizontal" size={23} color="#FF6802" />
                    </View>
                    <View style={{ flex: 1 }}>
                        <ScrollView
                            contentContainerStyle={styles.scrStyle}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}>
                            {popular.map((index) => (
                                <TouchableOpacity  activeOpacity={0.5} style={styles.poItem} key={index}>
                                    <Image style={[styles.poImg, { height: 130, width: 130 }]} source={require(Hp)} />
                                    <View style={[styles.itemBar, {}]}>
                                        <View style={{ flexDirection: 'column' }}>
                                            <Text style={[styles.itemName, { fontWeight: '500', fontSize: 12, }]}>Harry Potter 7</Text>
                                            <Text style={[styles.itemRating, { fontWeight: '500', fontSize: 12, }]}><Entypo name="star" size={15} color="#EFCD09" /> 4.5</Text>
                                        </View>
                                        <TouchableOpacity style={[styles.itemplayBtn, { marginLeft: 7, marginRight: 5, }]}>
                                            <Entypo name="controller-play" size={18} color="#FF6802" />
                                        </TouchableOpacity>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>
                </View>
                <View style={styles.nothing}></View>
            </View>
        </SafeAreaView>
    );
}


export default HomeSreen;
