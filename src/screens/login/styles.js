import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width - 40;
export default styles = StyleSheet.create({
    container: {
        backgroundColor: '#1F1C2C',
        height: '100%'
    },
    box: {
        flex: 1,
    },
    btnBack: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20
    },
    loginTitle: {
        color: 'white',
        fontWeight: 'bold',
        // marginHorizontal: 15,
        fontSize: 24
    },
    options: {
        flex: 2,
        justifyContent: 'center',
        marginHorizontal: 20,
    },
    form: {
        top: 50,
        flex: 5,
        marginHorizontal: 20,
    },
    email: {
        flex: 1,
    },
    password: {
        flex: 1,
        top: -30
    },
    login:{
        top: -20,
        flex: 1,
    },
    linearGradient: {
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    txtLogin: {
        color: 'white',
        fontWeight : 'bold',
        fontSize : 18
    },
    formTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        bottom: 10
    },
    textInput: {
        color: 'white',
        backgroundColor: '#373041',
        padding: 20,
        borderRadius: 10
    },
    bottom: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtBottom:{
        color: '#9c9c9c',
    },
    txtSignUp:{
        color: 'white',
        top : '20%'
    },
    txtOptions: {
        color: '#9c9c9c',
        marginVertical: 20
    },
    btnOptions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    options1: {
        backgroundColor: '#373041',
        padding: 20,
        borderRadius: 10,
    },
    iconOptions: {
        marginHorizontal: (width / 6.5)
    },
})