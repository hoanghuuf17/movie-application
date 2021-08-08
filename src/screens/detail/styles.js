import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        backgroundColor: '#1F1C2C',
        height: '100%',
    },
    box: {
        flex: 1,
    },
    poster: {
        flex: 3,
        padding: 20
    },
    posterImg: {
        width: '100%',
        flex: 1,
        borderRadius: 20,
        resizeMode: 'cover'
    },
    posterRating: {
        color: 'white',
        position: 'absolute',
        bottom: '24%',
        left: 30,
    },
    posterBgr: {
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: 45,
        right: 20,
        padding: 5,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
    },
    watchNow: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
        padding: 10
    },
    playBtn: {
        backgroundColor: 'white',
        borderRadius: 50,
        alignItems: 'center',
        padding: 3
    },
    infos: {
        flex: 1,
        alignItems: 'center',
    },
    line: {
        backgroundColor: '#3b3b3b',
        height: 1,
        width: '80%',
        marginLeft: 40,
        marginRight: 200,
    },
    name: {
        fontSize: 22,
        color: 'white',
        fontWeight: '700',
        textAlign: 'center',
    },
    info: {
        fontSize: 16,
        color: '#595959',
        fontWeight: '500',
    },
    detail: {
        flex: 2.25,
        marginLeft: 20,
        marginRight: 20,
    },
    detailTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
        marginVertical: 7
    },
    detailContent: {
        color: '#919191',
        fontSize: 14,
        textAlign: 'justify',
    },
    cast: {
        flex: 1.5,
        marginLeft: 20,
    },
    castTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
        top: 4
    },
    recommended: {
        flex: 3.25,
        marginLeft: 20,
    },
    recommendedTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
        bottom: 7
    }
})