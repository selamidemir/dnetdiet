import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import auth from '@react-native-firebase/auth';

import saveData from '../utils/saveData';

import foods from '../assets/js/foods';
import diets from '../assets/js/diets';

const initialValues = {
  user: {},
  login: false,
  foods: foods,
  diets: diets,
  reminders: [],
  profileData: {
    name: 'Selami Demir',
    gender: 'Erkek',
    age: 51,
    height: 172,
    weight: 95,
    activity: 'Az Hareketli',
  },
  isProfileSettingOk: true,
  isEditProfile: false,
};

const redusers = (state, action) => {
  const {payload} = action;
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        login: true,
        user: payload.user,
      };
      break;

    case 'LOGOUT':
      return {
        ...state,
        login: false,
        user: null,
      };
      break;

    case 'SAVE_DATE':
      saveData();
      return state;
      break;

    case 'EDIT_PROFILE':
      return {
        ...state,
        isEditProfile: true,
      };
      break;

      case 'SAVE_PROFILE_FORM':
        return {
          ...state,
          profileData: {...payload.profileData},
          isEditProfile: false,
          isProfileSettingOk: true,
        }
    case 'CANCEL_EDIT_PROFILE':
      return {
        ...state,
        isEditProfile: false,
      };
      break;

    default:
      return state;
      break;
  }
};

const store = createStore(
  redusers,
  auth().currentUser
    ? {
        ...initialValues,
        user: auth().currentUser,
        login: true,
      }
    : initialValues,
);

const AppProvider = ({children}) => {
  return <Provider store={store}>{children}</Provider>;
};

export default AppProvider;
