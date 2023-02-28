import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import styles from './FoodCard.style';

import randomBackgroundColor from '../../hooks/randomColor';
import colors from '../../assets/js/colors';

const FoodCard = ({food}) => {
  return (
    <View style={styles.container}>
      {false ? (
        <Text>Yükleniyor</Text>
      ) : (
        <>
          {/* <Image style={styles.image} alt={food.name} /> */}
          <View style={{...styles.image, backgroundColor: randomBackgroundColor(colors.fourth)}} />
          <View style={styles.info_container}>
            <Text style={styles.name}>{food.name}</Text>
            <Text style={styles.info}>{food.calory} cl</Text>
          </View>
        </>
      )}
    </View>
  );
};

export default FoodCard;
