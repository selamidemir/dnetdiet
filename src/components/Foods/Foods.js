import React from 'react';
import {FlatList, View, Text} from 'react-native';
import {useSelector} from 'react-redux';

import FoodCard from '../FoodCard';

import styles from './Foods.style';

const Foods = () => {
  const foods = useSelector(state => state.foods);

  const renderFood = food => <FoodCard food={food.item} />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Yiyecekler</Text>
      <FlatList data={foods} renderItem={renderFood} style={styles.food_list} />
    </View>
  );
};

export default Foods;
