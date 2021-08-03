import React, { useRef } from 'react';
import { View, Animated, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeSreen from '../screens/home';
import SearchSreen from '../screens/search';
import SavedSreen from '../screens/saved';
import ProfileSreen from '../screens/saved';
import DetailSreen from '../screens/detail';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Root = () => {
    const tabOffsetValue = useRef(new Animated.Value(0)).current;
    const getWidth = () => {
        let width = Dimensions.get('window').width;
        width = width - 40;
        return width / 4;
    }

    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    showLabel: false,
                    style: {
                        backgroundColor: '#32293C',
                        bottom: 16,
                        position: 'absolute',
                        marginHorizontal: 20,
                        borderRadius: 50,
                        borderTopColor: '#32293C',
                        height: 60,
                        shadowColor: 'black',
                        shadowOpacity: 0.2,
                        shadowOffset: {
                            width: 0,
                            height: 10
                        }
                    }
                }}>
                <Tab.Screen name="HomeScreen" options={{
                    tabBarIcon: ({ focused }) =>
                        <View style={{ position: 'absolute', top: '50%' }}>
                            {focused ? <Fontisto name='home' size={24} color='white' />
                                : <SimpleLineIcons name='home' size={24} color='white' />}
                        </View>
                }} listeners={({ navigation, route }) => ({
                    tabPress: e => {
                        Animated.spring(tabOffsetValue, {
                            toValue: 0,
                            useNativeDriver: true,
                        }).start()
                    }
                })}>
                    {() =>
                        <Stack.Navigator>
                            <Stack.Screen name="Home" component={HomeSreen} options={{ headerShown: false }} />
                            <Stack.Screen name="Detail" component={DetailSreen} options={{ headerShown: false }} />
                        </Stack.Navigator>}
                </Tab.Screen>
                <Tab.Screen name="Search" component={SearchSreen} options={{
                    tabBarIcon: ({ focused }) =>
                        <View style={{ position: 'absolute', top: '50%' }}>
                            {focused ? <Feather name='search' size={26} color='white' />
                                : <EvilIcons name='search' size={34} color='white' />}
                        </View>
                }} listeners={({ navigation, route }) => ({
                    tabPress: e => {
                        Animated.spring(tabOffsetValue, {
                            toValue: getWidth(),
                            useNativeDriver: true,
                        }).start()
                    }
                })} />
                <Tab.Screen name="Saved" component={SavedSreen} options={{
                    tabBarIcon: ({ focused }) =>
                        <View style={{ position: 'absolute', top: '50%' }}>
                            <MaterialCommunityIcons name={focused ? 'tag-multiple' : 'tag-multiple-outline'} size={28} color='white' />
                        </View>
                }} listeners={({ navigation, route }) => ({
                    tabPress: e => {
                        Animated.spring(tabOffsetValue, {
                            toValue: getWidth() * 2,
                            useNativeDriver: true,
                        }).start()
                    }
                })} />
                <Tab.Screen name="Profile" component={ProfileSreen} options={{
                    tabBarIcon: ({ focused }) =>
                        <View style={{ position: 'absolute', top: '50%' }}>
                            <Ionicons name={focused ? 'person' : 'person-outline'} size={24} color='white' />
                        </View>
                }} listeners={({ navigation, route }) => ({
                    tabPress: e => {
                        Animated.spring(tabOffsetValue, {
                            toValue: getWidth() * 3,
                            useNativeDriver: true,
                        }).start()
                    }
                })} />
            </Tab.Navigator>
            <Animated.View style={{
                backgroundColor: 'white',
                height: 2,
                width: getWidth() - 90,
                position: 'absolute',
                bottom: 28,
                left: 67,
                transform: [
                    {
                        translateX: tabOffsetValue
                    }
                ]
            }}></Animated.View>
        </NavigationContainer>
    )
}

export default Root
