import { StyleSheet } from 'react-native';
export default styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#21182C'
    },
    box: {
        flex: 1
    },
    header: {
        flex: 0.75,
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        paddingLeft: 20
    },
    searchBar: {
        top: -10,
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 0.75,
        alignItems: 'center'
    },
    textInput: {
        flex: 1,
        padding: 10,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#7F7A84'
    },
    btnSearch: {
        backgroundColor: '#FF6802',
        padding: 10,
        borderRadius: 50,
        marginLeft: 10,
        height: '65%'
    },
    content: {
        top: -15,
        flex: 8.5,
        marginLeft: 20,
        marginRight: 20,
        justifyContent: 'center'
    }
})