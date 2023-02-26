import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AppProvider from '../../contexts/AppContext';

import Login from '../Login';
import SingIn from '../SingIn';
import Profile from '../Profile';

import TabHome from '../TabHome';
import TabSetting from '../TabSetting';
import TabReport from '../TabReport';
import Foods from '../Foods';
import Diets from '../Diets';

const Tab = createBottomTabNavigator();

const StackProfile = createNativeStackNavigator();
const StackFood = createNativeStackNavigator();
const StackDiet = createNativeStackNavigator();

const TabFood = () => {
  return (
    <StackFood.Navigator screenOptions={{headerShown: false}}>
      <StackFood.Screen name="foodsPage" component={Foods} />
    </StackFood.Navigator>
  );
};

const TabDiet = () => {
  return (
    <StackDiet.Navigator screenOptions={{headerShown: false}}>
      <StackDiet.Screen name="dietsPage" component={Diets} />
    </StackDiet.Navigator>
  );
};

const App = () => {
  const login = useSelector(selector => selector.login);
  const isProfileSettingOk = useSelector(selector => selector.isProfileSettingOk);

  return (
    <NavigationContainer>
      {!login ? (
        <StackProfile.Navigator screenOptions={{headerShown: false}}>
          <StackProfile.Screen name="profileLogin" component={Login} />
          <StackProfile.Screen name="profileSingIn" component={SingIn} />
        </StackProfile.Navigator>
      ) : (
        <Tab.Navigator screenOptions={{headerShown: false}} initialRouteName={isProfileSettingOk ? 'homeTab' : 'settingTab'}>
          <Tab.Screen name="profileTab" component={Profile} />
          <Tab.Screen name="foodTab" component={TabFood} />
          <Tab.Screen name="dietTab" component={TabDiet} />
          <Tab.Screen name="reportTab" component={TabReport} />
          <Tab.Screen name="settingTab" component={TabSetting} />
          <Tab.Screen name="homeTab" component={TabHome} />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
};

const AppWrapper = () => {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
};

export default AppWrapper;
