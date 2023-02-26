import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';

import styles from './Button.styles';

function Button({text, style, loading=false, disabled=false, onPress}) {
  const allStyles = { ...styles, ...style};

  return (
    <TouchableOpacity style={allStyles.container} onPress={onPress} disabled={loading || disabled}>
      {loading && <ActivityIndicator color={allStyles.text.color} />}
      {!loading && <Text style={allStyles.text}>{text}</Text>}
    </TouchableOpacity>
  );
}

export default Button;
