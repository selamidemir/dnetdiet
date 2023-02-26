import {StyleSheet, Dimensions} from 'react-native';

import colors from '../../assets/js/colors';

const deviceSizes = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    backgroundColor: colors.fifth,
  },
  form: {
    backgroundColor: colors.third,
    borderRadius: 5,
    padding: 10,
    paddingTop: 25,
    paddingBottom: 25,
  },
  title: {
    color: colors.primary,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  email: {
    fontSize: 17,
    color: colors.gray,
    color: colors.black,
    borderBottomColor: colors.secondary,
    borderBottomWidth: 1,
  },
  password: {
    fontSize: 17,
    color: colors.gray,
    borderBottomColor: colors.secondary,
    borderBottomWidth: 1,
  },
  btn_login: {
    color: colors.white,
    backgroundColor: colors.primary,
    marginBottom: 10,
    marginTop: 25,
  },
  btn_singin: {
    marginTop: 10,
  },
  image: {
    width: deviceSizes.width * 0.65,
    height: deviceSizes.width * 0.65,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 35,
  },
  error: {
    color: colors.error,
    fontSize: 13,
  },
  btns_container: {
    marginTop: 25,
  }
});
