import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import Button from '../Button';

import styles from './Profile.style';
import { useDispatch } from 'react-redux';

const Profile = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    auth().signOut();
    dispatch({
      type: 'LOGOUT',
    });
    console.log("Üye çıkışı yapıldı");
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text>Profile</Text>
      <Button text='Çıkış yap' onPress={handleLogout} />
    </SafeAreaView>
  );
};

export default Profile;
