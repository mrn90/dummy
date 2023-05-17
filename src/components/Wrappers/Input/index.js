import React from 'react';
import {TextInput} from 'react-native';
import {colors} from '../../../utils/theme';
import styles from './styles';

export default TextInputHOC = props => {
  return (
    <TextInput
      placeholderTextColor={colors.palceholderColor}
      underlineColorAndroid="rgba(0,0,0,0)"
      autoCapitalize="none"
      textAlignVertical="top"
      // {...props}
      style={[styles.textInput, props?.textInputStyle]}
    />
  );
};
