import React from 'react';
import {FlatList, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';

import FoodCard from '../FoodCard';

import styles from './Foods.style';

const Foods = ({navigation}) => {
  const foods = useSelector(state => state.foods);

  const renderFood = food => <FoodCard food={food.item} />;

  const addFood = () => {
    navigation.navigate('addFoodPage');
  }

  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title}>Yiyecekler</Text>
        <Icon.Button name="plus-box-outline" style={styles.add_icon} onPress={addFood} />
      </View>

      <FlatList data={foods} renderItem={renderFood} style={styles.food_list} />
    </View>
  );
};

export default Foods;
