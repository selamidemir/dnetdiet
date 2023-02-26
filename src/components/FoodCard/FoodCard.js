import {View, Text, Image} from 'react-native';
import React from 'react';

import styles from './FoodCard.style';

const FoodCard = ({food}) => {
  return (
    <View style={styles.container}>
      {false ? (
        <Text>Yükleniyor</Text>
      ) : (
        <>
          <Image style={styles.image} alt={food.name} source={food.image} />
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
