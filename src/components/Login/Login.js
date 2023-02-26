import React, {useState} from 'react';
import {View, TextInput, Image, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';
import {Formik} from 'formik';

import Button from '../Button';

import styles from './Login.style';
import colors from '../../assets/js/colors';
import ValidationSchema from './ValidationSchema';
import {useDispatch} from 'react-redux';

const Login = ({navigation}) => {
  const [loginLoading, setLoginLoading] = useState(false);
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const handleGoToSingIn = () => {
    navigation.navigate('profileSingIn');
  };

  const handleSubmit = ({email, password}, {resetForm}) => {
    setLoginLoading(true);
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        console.log(user);
        dispatch({
          type: 'LOGIN',
          payload: {
            user: user.user,
          },
        });
        setLoginLoading(false);
        resetForm();
      })
      .catch(err => {
        showMessage({
          message: 'Üye girişi yapılamadı.',
          duration: 2555,
          type: 'danger',
          icon: 'danger',
        });
        setLoginLoading(false);
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ValidationSchema}
      onSubmit={handleSubmit}>
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
              editable={!loginLoading}
              placeholder="Eposta adresinizi giriniz..."
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
            />
            {errors.email && <Text style={styles.error}>{errors.email}</Text>}
            <TextInput
              style={styles.password}
              value={values.password}
              editable={!loginLoading}
              placeholder="Şifrenizi giriniz..."
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              secureTextEntry={true}
            />
            {errors.password && (
              <Text style={styles.error}>{errors.password}</Text>
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
                text="Giriş Yap"
                loading={loginLoading}
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
                text="Kayıt Ol"
                disabled={loginLoading}
                onPress={handleGoToSingIn}
              />
            </View>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default Login;
