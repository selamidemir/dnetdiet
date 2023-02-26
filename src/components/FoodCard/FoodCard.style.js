import { StyleSheet } from 'react-native'
import colors from '../../assets/js/colors'

export default StyleSheet.create({
    container: {
        backgroundColor: colors.fourth,
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        borderColor: colors.secondary,
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    image: {
        width: 65,
        height: 65,
        borderRadius: 33,
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.secondary,
    },
    info_container: {
        marginLeft: 25,
    },
    name: {
        fontSize: 19,
        color: colors.primary,
        fontWeight: 500,
    },
    info: {
        // backgroundColor: colors.white,
        padding: 5,
        width: 100,
        color: colors.secondary,
        borderRadius: 25,
        textAlign: 'center',
        fontSize: 15,
    }
})