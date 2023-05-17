import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/theme';
import { vh, vw } from '../../../utils/units';
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkBackground,
    width: 40 * vw,
    // alignItems: 'center',
    // justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 2.5 * vh,
    paddingVertical: 2 * vh,
  },
  text: {
    fontSize: 2 * vh,
    color: 'white',
    fontWeight: 'normal',
    alignSelf: 'center',
  },
  textVIEWPROFILE: {
    fontSize: 1.1 * vh,
    color: colors.red,
    fontWeight: 'normal',
    alignSelf: 'center',
  },
  textPAYNOW: {
    fontSize: 1.4 * vh,
    color: colors.red,
    fontWeight: 'normal',
    alignSelf: 'center',
  },
  textCONSULTNOW: {
    fontSize: 1.1 * vh,
    color: colors.white,
    fontWeight: 'normal',
    alignSelf: 'center',
  },
  textONARRIVAL: {
    fontSize: 1.4 * vh,
    color: colors.red,
    fontWeight: 'normal',
    alignSelf: 'center',
  },
  icon: {
    height: 2.5 * vh,
    width: 2.5 * vh,
    resizeMode: 'contain',
    right: 10 * vh
    // alignSelf: 'flex-start',
    // alignItems: 'center',

  }
});
export default styles;
