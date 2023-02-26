import { StyleSheet, Dimensions } from 'react-native'

const deviceSizes = Dimensions.get('window');

import colors from '../../assets/js/colors';

export default StyleSheet.create({
    container: {

    },
    formTitle: {
        fontSize: 21,
        fontWeight: 'bold',
        color: colors.white,
        backgroundColor: colors.secondary,
        padding: 10,
        borderRadius: 5,
        borderBottomWidth: 1,
        borderBottomColor: colors.primary,
    },
    form_container: {
        backgroundColor: colors.white,
        padding: 10,
        paddingBottom: 20,
        borderRadius: 5,
        marginTop: 20,
        height: deviceSizes.height * 0.80,
    },
    form_row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderBottomWidth: 1,
        padding: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 17,
        color: colors.secondary,
        fontWeight: 'bold',
        width: deviceSizes.width * 0.25,
    },
    value: {
        fontSize: 17,
        color: colors.black,
        marginLeft: 35,
        minWidth: 155,
    },
    dropdown: {
        fontSize: 17,
        color: colors.black,
        marginLeft: 25,
        width: 175,
    }
});