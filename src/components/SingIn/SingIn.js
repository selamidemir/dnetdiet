import React, {useState} from 'react';
import {View, TextInput, Image, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import FlashMessage, {showMessage} from 'react-native-flash-message';
import {Formik} from 'formik';

import Button from '../Button';

import styles from './SingIn.style';
import colors from '../../assets/js/colors';
import ValidationSchema from './ValidationSchema';
import {useDispatch} from 'react-redux';

const SingIn = ({navigation}) => {
  const [singinLoading, setSinginLoading] = useState(false);
  const initialValues = {
    email: '',
    password: '',
    repassword: '',
  };

  const handleGoToLogin = () => {
    navigation.navigate('profileLogin');
  };

  const dispatch = useDispatch();

  const handleSingIn = ({email, password}, {resetForm}) => {
    setSinginLoading(true);
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        setSinginLoading(false);
        showMessage({
          duration: 2555,
          message: 'Kayıt başarılı bir şekilde gerçekleşti.',
          type: 'success',
          icon: 'success',
          position: 'top',
        });
        setTimeout(() => {
          resetForm();
          navigation.navigate('profileLogin');
        }, 1555);
      })
      .catch(err => {
        setSinginLoading(false);
        showMessage({
          duration: 3555,
          message: 'Kayıt yapılırken  hata oluştu. İşlem yapılamadı.',
          type: 'danger',
          icon: 'danger',
          position: 'top',
        });
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ValidationSchema}
      onSubmit={handleSingIn}>
      {({handleChange, handleBlur, handleSubmit, values, errors, isValid}) => (
        <View style={styles.container}>
          <View style={styles.form}>
            <Text style={styles.title}>NET DİYET</Text>
            <Image
              style={styles.image}
              source={require('../../assets/images/login-image.png')}
            />
            <TextInput
              style={styles.email}
              value={values.email}
              placeholder="Eposta adresinizi giriniz..."
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
            />
            {errors.email && <Text style={styles.error}>{errors.email}</Text>}
            <TextInput
              style={styles.password}
              value={values.password}
              placeholder="Şifrenizi giriniz..."
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
            />
            {errors.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}
            <TextInput
              style={styles.repassword}
              value={values.repassword}
              placeholder="Şifrenizi tekrar giriniz..."
              onChangeText={handleChange('repassword')}
              onBlur={handleBlur('repassword')}
            />
            {errors.repassword && (
              <Text style={styles.error}>{errors.repassword}</Text>
            )}
            <View style={styles.btns_container}>
              <Button
                style={{
                  container: {
                    backgroundColor: colors.primary,
                    marginBottom: 10,
                    padding: 5,
                    alignItems: 'center',
                    borderRadius: 5,
                  },
                  text: {
                    fontSize: 17,
                    color: colors.white,
                  },
                }}
                text="Kayıt Ol"
                loading={singinLoading}
                onPress={handleSubmit}
              />
              <Button
                style={{
                  container: {
                    backgroundColor: colors.white,
                    color: colors.white,
                    padding: 5,
                    alignItems: 'center',
                    borderRadius: 5,
                  },
                  text: {
                    fontSize: 17,
                    color: colors.primary,
                  },
                }}
                text="Giriş Yap"
                disabled={singinLoading}
                onPress={handleGoToLogin}
              />
            </View>
          </View>
          <FlashMessage position="top" />
        </View>
      )}
    </Formik>
  );
};

export default SingIn;
