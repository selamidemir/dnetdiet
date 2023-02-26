import { View, Text } from 'react-native'
import React from 'react'

import Button from '../Button';

import styles from './Setting.style';
import colors from '../../assets/js/colors';
import { useDispatch, useSelector } from 'react-redux';

const Setting = () => {
  const profileData = useSelector(selector => selector.profileData);
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch({
      type: "EDIT_PROFILE",
    });
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.formTitle}>Ayarlar</Text>
      <View style={styles.form_container}>
        <View style={styles.form_row}>
          <Text style={styles.title}>Name :</Text>
          <Text style={styles.value}>{profileData.name}</Text>
        </View>
        <View style={styles.form_row}>
          <Text style={styles.title}>Cinsiyet :</Text>
          <Text style={styles.value}>{profileData.gender}</Text>
        </View>
        <View style={styles.form_row}>
          <Text style={styles.title}>Yaş :</Text>
          <Text style={styles.value}>{profileData.age}</Text>
        </View>
        <View style={styles.form_row}>
          <Text style={styles.title}>Boy :</Text>
          <Text style={styles.value}>{profileData.height}</Text>
        </View>
        <View style={styles.form_row}>
          <Text style={styles.title}>Kilo :</Text>
          <Text style={styles.value}>{profileData.weight}</Text>
        </View>
        <View style={styles.form_row}>
          <Text style={styles.title}>Hareketlilik :</Text>
          <Text style={styles.value}>{profileData.activity}</Text>
        </View>
        <Button text='Düzenle' style={{
          container: {
            padding: 7,
            marginTop: 20,
            borderRadius: 5,
            backgroundColor: colors.primary,
          },
          text: {
            color: colors.white,
            fontSize: 19,
            textAlign: 'center',
          }
        }}
        onPress={handleEdit}
        />
      </View>
    </View>
  );
}

export default Setting