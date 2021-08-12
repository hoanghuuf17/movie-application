import { StyleSheet } from 'react-native';
export default styles = StyleSheet.create({
    container: {
        backgroundColor: '#1F1C2C',
        height: '100%'
    },
    box: {
        // flex: 1,

    },
    top: {
        alignItems: 'center',
        marginVertical : 40
    },
    contain: {

    },
    title:{
        color: '#ddd',
        left: 10,
        fontSize: 16,
        bottom: -10
    },
    part:{
        backgroundColor: '#282533',
        marginVertical : 25
    },
    row: {
        marginHorizontal: 20,
        marginVertical : 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom : 5,
        borderBottomWidth : 0.5,
        borderColor: '#404040',
        flex: 1
    },
    icon:{
        flex: 1
    },
    name: {
        color: 'white',
        fontWeight: '500',
        fontSize: 18,
        flex: 7
    },
    rowDetail: {
        color: '#ddd',
        fontWeight: '400',
        fontSize: 18,
        flex: 2
    },
})