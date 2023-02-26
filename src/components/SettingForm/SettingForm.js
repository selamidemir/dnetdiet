import React, {useEffect, useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
import {Formik} from 'formik';

import Button from '../Button';

import styles from './SettingForm.style';
import colors from '../../assets/js/colors';
import genders from '../../assets/js/genders';
import activities from '../../assets/js/activities';
import ValidationSchema from './ValidationSchema';

const SettingForm = () => {
  const profileData = useSelector(selector => selector.profileData);

  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  const initialValues = {
    name: profileData.name,
    gender: profileData.gender,
    age: String(profileData.age),
    height: String(profileData.height),
    weight: String(profileData.weight),
    activity: profileData.activity,
  };

  const cancelEditProfile = () => {
    dispatch({
      type: 'CANCEL_EDIT_PROFILE',
    });
  };

  const handleFormSubmit = (values, {resetForm}) => {
    dispatch({
      type: 'SAVE_PROFILE_FORM',
      payload: {profileData: values},
    });
    resetForm();
  };

  useEffect(() => {
    // Eğer ekrandan çıkılırsa
    // formu pasif hale getirelim
    if (!isFocused) {
      dispatch({
        type: 'CANCEL_EDIT_PROFILE',
      });
    }
  }, [isFocused]);

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={ValidationSchema}
      onSubmit={handleFormSubmit}>
      {({handleChange, handleBlur, handleSubmit, values, errors, isValid}) => (
        <View style={styles.container}>
          <Text style={styles.formTitle}>Ayar Yap</Text>
          <View style={styles.form_container}>
            <View style={styles.form_row}>
              <Text style={styles.title}>Name :</Text>
              <TextInput
                value={values.name}
                style={styles.value}
                placeholder='Adınızı giriniz...'
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
              />
            </View>
            <View style={styles.form_row}>
              <Text style={styles.title}>Cinsiyet :</Text>
              <Picker
                style={styles.dropdown}
                mode="dialog"
                selectedValue={values.gender}
                onValueChange={handleChange('gender')}>
                {genders.map(item => (
                  <Picker.Item
                    key={item.id.toString()}
                    label={item.label.toString()}
                    value={item.label.toString()}
                  />
                ))}
              </Picker>
            </View>
            <View style={styles.form_row}>
              <Text style={styles.title}>Yaş :</Text>
              <TextInput
                type="number"
                value={values.age}
                placeholder='Yaşınızı giriniz...'
                style={styles.value}
                onChangeText={handleChange('age')}
                onBlur={handleBlur('age')}
              />
            </View>
            <View style={styles.form_row}>
              <Text style={styles.title}>Boy :</Text>
              <TextInput
                type="number"
                value={values.height}
                placeholder='Boyunuzu giriniz...'
                style={styles.value}
                onChangeText={handleChange('height')}
                onBlur={handleBlur('height')}
              />
            </View>
            <View style={styles.form_row}>
              <Text style={styles.title}>Kilo :</Text>
              <TextInput
                type="number"
                value={values.weight}
                placeholder='Ağırlığınızı giriniz...'
                style={styles.value}
                onChangeText={handleChange('weight')}
                onBlur={handleBlur('weight')}
              />
            </View>
            <View style={styles.form_row}>
              <Text style={styles.title}>Hareketlilik :</Text>
              <Picker
                style={styles.dropdown}
                mode="dialog"
                selectedValue={values.activity}
                onValueChange={handleChange('activity')}>
                {activities.map(item => (
                  <Picker.Item
                    key={item.id.toString()}
                    label={item.label.toString()}
                    value={item.label.toString()}
                  />
                ))}
              </Picker>
            </View>
            <Button
              text="Kayıt Et"
              style={{
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
                },
              }}
              onPress={handleSubmit}
            />
            <Button
              text="Vazgeç"
              style={{
                container: {
                  padding: 7,
                  marginTop: 10,
                  borderRadius: 5,
                  backgroundColor: colors.secondary,
                },
                text: {
                  color: colors.white,
                  fontSize: 19,
                  textAlign: 'center',
                },
              }}
              onPress={cancelEditProfile}
            />
          </View>
        </View>
      )}
    </Formik>
  );
};

export default SettingForm;
