import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/theme';
import {vh, vw} from '../../../utils/units';
import {fonts} from '../../../assets';

export default styles = StyleSheet.create({
  textInput: {
    width: vw * 80,
    height: vh * 6,
    color: colors.black,
    textAlignVertical: 'center',
    fontFamily: fonts.Eurostile.Bold,
  },
});
