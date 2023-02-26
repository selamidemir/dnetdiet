import {StyleSheet, Dimensions} from 'react-native';

import colors from '../../assets/js/colors';

const deviceSizes = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.fifth,
  },
  food_list: {
    backgroundColor: colors.white,
    padding: 10,
    paddingBottom: 20,
    borderRadius: 5,
    marginTop: 20,
    height: deviceSizes.height * 0.80,
  },
  title: {
    fontSize: 21,
    fontWeight: 'bold',
    color: colors.white,
    backgroundColor: colors.secondary,
    padding: 10,
    borderRadius: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
  },
});
