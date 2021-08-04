import { StyleSheet } from 'react-native';
export default styles = StyleSheet.create({
    container: {
        backgroundColor: '#21182C',
        height: '100%'
    },
    box: {
        flex: 1,
    },
    header: {
        margin: 40,
        flexDirection: 'row',
        alignItems: 'center',
        flex: 2,
        justifyContent: 'space-between',
    },
    line: {
        width: 1,
        height: '60%',
        backgroundColor: '#ddd'
    },
    duration: {
        paddingLeft: 20,
        right: 20,
    },
    durationText: {
        fontSize: 18,
        fontWeight: '500',
        color: 'white',
    },
    name: {
        flex: 1,
        top: -20,
        paddingLeft: 40
    },
    firstName: {
        fontSize: 20,
        fontWeight: '500',
        color: 'white',
    },
    lastName: {
        fontSize: 17,
        fontWeight: '500',
        color: '#9c9c9c',
    },
    contain: {
        flex: 7,
        margin: 40
    },
    row: {
        padding: 10,
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        backgroundColor : '#4E4656',
        flex: 1,
        marginBottom: 60,
        borderRadius: 50
    },
    rowIconLeft: {
        flex: 2
    },
    rowTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight : '600',
        flex: 7
    },
    rowIconRight: {
        flex: 1
    }
})