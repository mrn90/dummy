import React from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './style';

export default TouchableHOC = props => {
  const handleOnPress = () => {
    if (props?.onPress) {
      props.onPress();
    }
  };

  return (
    <TouchableOpacity onPress={handleOnPress} style={props?.style}>
      {props?.children}
    </TouchableOpacity>
  );
};
