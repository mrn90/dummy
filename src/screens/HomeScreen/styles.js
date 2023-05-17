import {StyleSheet} from 'react-native';
import {checkPluginState} from 'react-native-reanimated/lib/reanimated2/core';
import {fonts} from '../../assets';
import {colors} from '../../utils/theme';
import {vh, vw} from '../../utils/units';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    width: '100%',
    // backgroundColor: colors.white
  },
  text: {
    textAlign: 'center',
  },
  modal: {
    alignSelf: 'center',
    width: '80%',
    // height: 10 * vh,
    // height: '50%',
    borderRadius: 3 * vh,
    backgroundColor: 'white',
    // margin: 5
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 3 * vh,
    // backgroundColor: 'red',
    marginTop: 5 * vh,
    // marginBottom: 2 * vh
  },
  search: {
    alignSelf: 'center',
    borderWidth: 0.1 * vh,
    backgroundColor: '#EAECF0',
    borderColor: colors.lightGray,
    borderRadius: 1 * vh,
    paddingVertical: 1.2 * vh,
    width: '90%',
    paddingLeft: 2 * vh,
    // marginTop: 2 * vh,
    shadowOpacity: 0.4,
    shadowOffset: { width: 1, height: 1 },
    color: colors.black
  },
  iconContainer: {
    // height: 4 * vh,
    width: 5 * vh,
    paddingVertical: 1.1 * vh,
    backgroundColor: colors.darkBackground,
    // right: 4 * vh,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 0.9 * vh,
    position: 'relative',
    // marginTop: 2 * vh,
    right: 5.1 * vh
  },
  searchIcon: {
    height: 2.5 * vh,
    width: 2.5 * vh,
    resizeMode: 'contain',
    // position: 'absolute',
    // marginTop: 2 * vh,
    // backgroundColor: 'red',
    // alignSelf: 'flex-end',
  },
  postContainer: {
    margin: 20,
    alignItems: 'flex-start',
    borderRadius: 15,
    flexDirection: 'row',
    // paddingHorizontal: 1 * vh
    // justifyContent: 'center'
  },
  postTitle: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 2 * vh,
    left: 2 * vh
  },
  postTitleName:{
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 2 * vh,
    left: 4 * vh
  },
});

export default styles;
