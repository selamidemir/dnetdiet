import React from 'react'
import { View, Text } from 'react-native'
import { Formik } from 'formik';

import styles from './AddFood.style';

const AddFood = () => {
  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title}>Yiyecek Ekle</Text>
      </View>
      <Formik style={styles.form}>
        {
            ({handleBlur, handleChange, handleSubmit, values}) => {

            }
        }
      </Formik>
    </View>
  )
}

export default AddFood