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
        flex: 0.5,
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
        alignItems: 'center',
        flex: 1,
    },
    textInput: {
        flex: 1,
        padding: 10,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#7F7A84'
    },
    btnSearch:{
        backgroundColor: '#FF6802',
        padding:10, 
        borderRadius: 50,
        marginLeft : 10
    },  
    content: {
        flex: 9,
    }
})