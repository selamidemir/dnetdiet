import {SafeAreaView, Text} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

import styles from './TabSetting.style';
import SettingForm from '../SettingForm';
import Setting from '../Setting';

const TabSetting = () => {
  const isProfileSettingOk = useSelector(
    selector => selector.isProfileSettingOk,
  );
  const isEditProfile = useSelector(selector => selector.isEditProfile);

  return (
    <SafeAreaView style={styles.container}>
      {isProfileSettingOk && !isEditProfile && <Setting />}
      {isProfileSettingOk && isEditProfile && <SettingForm />}
      {!isProfileSettingOk && <SettingForm />}
    </SafeAreaView>
  );
};

export default TabSetting;
