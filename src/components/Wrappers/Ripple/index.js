import React from 'react';
import Ripple from 'react-native-material-ripple';

export default RippleHOC = props => {
  const handleOnPress = () => {
    if (props?.onPress) {
      props.onPress();
    }
  };

  return (
    <Ripple
      {...props}
      onPress={handleOnPress}
      style={props?.style}
      rippleColor="gray"
      rippleOpacity={props.rippleOpacity ? props.rippleOpacity : 0.3}>
      {props?.children}
    </Ripple>
  );
};
