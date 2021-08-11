import React, { useLayoutEffect, useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Pressable, TextInput } from 'react-native';
import { Avatar } from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { userInfo, editUser } from '../../features/appUser';
import { favorite } from '../../features/appFavorite';
import Modal from 'react-native-modal';

const InfoSreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const user = useSelector(userInfo);
    const num = useSelector(favorite);
    const [modal, setModal] = useState(false);
    const [info, setInfo] = useState({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: '',
    });

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'Profile',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#1F1C2C', shadowColor: 'transparent' },
            headerLeft: () => (
                <TouchableOpacity style={{ marginLeft: 20 }} onPress={navigation.goBack}>
                    <AntDesign name="arrowleft" size={24} color="white" />
                </TouchableOpacity>
            ),
            headerRight: () => (
                <TouchableOpacity style={{ marginRight: 20 }} onPress={() => setModal(true)}>
                    <Text style={{ color: 'blue', fontSize: 18 }}>Edit</Text>
                </TouchableOpacity>
            ),
        });
    }, [navigation])


    const EditHandle = () => {
        dispatch(editUser({
            firstName: info.firstName,
            lastName: info.lastName,
            email: info.email,
        }))
        setModal(false);
    }

    return (
        <ScrollView style={styles.container}>
            <Modal isVisible={modal}>
                <View style={{ height: '40%', backgroundColor: 'white', borderRadius: 10, justifyContent: 'center' }}>
                    <Pressable onPress={EditHandle}>
                        <Text style={{ color: '#2b3cc4', fontSize: 18, fontWeight: 'bold', position: 'absolute', right: 10, top: -20 }}>Done</Text>
                    </Pressable>
                    <View style={{ flexDirection: 'row', marginHorizontal: 20, alignItems: 'center', marginVertical: 30 }}>
                        <Text style={{ fontWeight: '600' }}>First Name</Text>
                        <TextInput
                            value={info.firstName}
                            onChangeText={e => setInfo({ ...info, firstName: e })}
                            style={{ backgroundColor: '#ddd', padding: 10, flex: 1, marginLeft: 10, borderRadius: 10, color: '#9c9c9c' }}
                            placeholder={`${user.firstName} ${user.lastName}`}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', marginHorizontal: 20, alignItems: 'center', }}>
                        <Text style={{ fontWeight: '600' }}>Last Name</Text>
                        <TextInput
                            value={info.lastName}
                            onChangeText={e => setInfo({ ...info, lastName: e })}
                            style={{ backgroundColor: '#ddd', padding: 10, flex: 1, marginLeft: 10, borderRadius: 10, color: '#9c9c9c' }}
                            placeholder={`${user.firstName} ${user.lastName}`}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', marginHorizontal: 20, alignItems: 'center', marginVertical: 30 }}>
                        <Text style={{ fontWeight: '600' }}>Email</Text>
                        <TextInput
                            value={info.email}
                            onChangeText={e => setInfo({ ...info, email: e })}
                            style={{ backgroundColor: '#ddd', padding: 10, flex: 1, marginLeft: 45, borderRadius: 10, color: '#9c9c9c' }}
                            placeholder={`${user.email}`}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', marginHorizontal: 20, alignItems: 'center' }}>
                        <Text style={{ fontWeight: '600' }}>Password</Text>
                        <TextInput
                            value={info.password}
                            onChangeText={e => setInfo({ ...info, password: e })}
                            style={{ backgroundColor: '#ddd', padding: 10, flex: 1, marginLeft: 18, borderRadius: 10 }}
                            placeholder='***********'
                        />
                    </View>
                </View>
            </Modal>
            <View style={styles.box}>
                <View style={styles.top}>
                    <Avatar rounded size={120} source={require('../../images/avatar.jpg')} />
                </View>
                <View style={styles.contain}>
                    <View style={styles.row}>
                        <Text style={styles.name}>Name</Text>
                        <Text style={styles.rowDetail}>{info.lastName} {info.firstName} </Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.name}>Email</Text>
                        <Text style={styles.rowDetail}>{info.email}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.name}>Joined</Text>
                        <Text style={styles.rowDetail}>05, May, 2021</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.name}>Favorite</Text>
                        <Text style={styles.rowDetail}>{num.length}</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

export default InfoSreen;
