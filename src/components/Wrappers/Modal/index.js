import React, {useImperativeHandle, useState} from 'react';
import {Modal, View} from 'react-native';
// import {BlurView} from '@react-native-community/blur';
import RippleHOC from '../Ripple';
import styles from './styles';

const ModalHOC = React.forwardRef((props, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const {isBlur = true} = props;

  useImperativeHandle(ref, () => ({
    show: () => showModal(),
    hide: () => hideModal(),
  }));

  const showModal = () => {
    setIsVisible(true);
    if (props.onShow) {
      props.onShow();
    }
  };

  const hideModal = () => {
    setIsVisible(false);
    if (props.onHide) {
      props.onHide();
    }
  };

  return (
    <Modal
      {...this.props}
      animationType="fade"
      style={styles.modal}
      visible={isVisible}
      transparent={true}
      statusBarTranslucent={true}>
      {isBlur && (
        <RippleHOC style={styles.blurBackground} onPress={hideModal}>
          {/* <BlurView
            style={styles.blurView}
            blurType="dark"
            blurAmount={1}
            reducedTransparencyFallbackColor="black"
          /> */}
        </RippleHOC>
      )}

      <View style={[styles.modalContent, props.style]} pointerEvents="box-none">
        {props.children}
      </View>
    </Modal>
  );
});

export default ModalHOC;
