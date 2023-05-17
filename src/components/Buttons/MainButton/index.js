import React from 'react';
import { View, Pressable, Image } from 'react-native';
import { icons } from '../../../assets';
import { colors } from '../../../utils/theme';
import CenturyGothic from '../../Wrappers/Text/CenturyGothic';
import EurostileBold from '../../Wrappers/Text/EurostileBold';
import styles from './styles';
const MainButton = props => {
  console.log('props', props?.text)
  return (
    <Pressable
      activeOpacity={0.9}
      {...props}
      style={({ pressed }) => [
        styles.container,
        props.style,
        pressed && {
          backgroundColor: props.pressedColor
            ? props.pressedColor
            : colors.lightGray,
        },
      ]}>
      {props?.text == 'Patient Register' ? <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <Image source={props?.icon} resizeMode='contain' style={styles.icon} />

        <CenturyGothic style={[styles.text, props.textStyle]}>
          {props.text}
        </CenturyGothic>

      </View> : props?.text == 'Doctor Register' ? <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <Image source={props?.icon} resizeMode='contain' style={styles.icon} />

        <CenturyGothic style={[styles.text, props.textStyle]}>
          {props.text}
        </CenturyGothic>

      </View> : props?.text === 'VIEW PROFILE' ? <CenturyGothic style={[styles.textVIEWPROFILE, props.textStyle]}>
        {props.text}
      </CenturyGothic> : props?.text === 'PAY NOW' ? <CenturyGothic style={[styles.textPAYNOW, props.textStyle]}>
        {props.text}
      </CenturyGothic> : props?.text === 'CONSULT NOW' ? <CenturyGothic style={[styles.textCONSULTNOW, props.textStyle]}>
        {props.text}
      </CenturyGothic> : props?.text === 'ON ARRIVAL' ? <CenturyGothic style={[styles.textONARRIVAL, props.textStyle]}>
        {props.text}
      </CenturyGothic> : <CenturyGothic style={[styles.text, props.textStyle]}>
        {props.text}
      </CenturyGothic>
      }


    </Pressable>
  );
};

export default MainButton;
