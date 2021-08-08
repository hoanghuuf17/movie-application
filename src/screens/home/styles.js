import { StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get('window').width - 40;
const height = width * 0.1


export default styles = StyleSheet.create({
    container: {
        backgroundColor: '#1F1C2C',
        flex: 1,
    },
    box: {
        flex: 1,
    },
    header: {
        flex: 0.75,
        justifyContent: 'center',
    },
    filter: {
        flex: 0.75,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20
    },
    oustanding: {
        flex: 3,
        padding: 20,
    },
    ostItem: {
        // marginRight : 1
    },
    pagpination: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 25,
        alignSelf: 'center',
    },
    paginText: {
        fontSize: 11,
        color: '#9c9c9c',
        marginHorizontal: 5
    },
    paginTextActive: {
        fontSize: 11,
        color: '#fff',
        marginHorizontal: 5
    },
    popular: {
        flex: 2.75,
        marginLeft: 20
    },
    maylike: {
        flex: 2.25,
        marginLeft: 20
    },
    nothing: {
        flex: 0.5,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        paddingLeft: 20
    },
    filterText: {
        fontSize: 20,
        fontWeight: '600',
        color: 'white',
    },
    filterPress: {
        padding: 10
    },
    ostImg: {
        width,
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
    popularHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 20,
        marginVertical: 5
    },
    popularTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: 'white',
    },
    poItem: {
        alignItems: 'center',
        borderRadius: 50,
        marginRight: 10
    },
    poImg: {
        borderRadius: 20,
        height: 180,
        width: 180,
    },
    scrStyle: {
        alignItems: 'center',
        marginLeft: 20
    },
    itemBar: {
        borderRadius: 20,
        position: 'absolute',
        height: 'auto',
        bottom: 5,
        padding: 5,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF50',
        alignItems: 'center'
    },
    itemName: {
        color: 'white',
        fontWeight: '600',
        fontSize: 15,
    },
    itemRating: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    },
    itemplayBtn: {
        backgroundColor: 'white',
        borderRadius: 50,
        alignItems: 'center',
        height: 20,
        marginLeft: 20,
        marginRight: 10,
    }
})