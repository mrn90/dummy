import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/theme';
import {vh, vw} from '../../../utils/units';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  postContainer: {
    margin: 20,
    alignItems: 'flex-start',
    borderRadius: 15,
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // backgroundColor: 'red'
  },
  post: {
    fontFamily: 'Roboto-Regular',
    marginRight: 2,
    textAlign: 'left',
  },
  postTitle: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 2 * vh,
    left: 2 * vh
  },
  postTitleUrl: {
    textAlign: 'left',
    fontWeight: 'normal',
    fontSize: 2 * vh,
    left: 2 * vh,
    // marginTop: 1 * vh
  },
  postBody: {
    textAlign: 'left',
    marginLeft: 2 * vh,
    fontSize: 2 * vh,
    marginTop: 1 * vh,
  },
  postBodyText: {
    textAlign: 'left',
    marginLeft: 2 * vh,
    fontSize: 1.8 * vh,
    marginTop: 1 * vh,
    // backgroundColor: 'red'
  },
  locationText: {
    alignSelf: 'center',
  },
  modal: {
    borderRadius: 3 * vh,
    // backgroundColor: 'white',
  },
  modalContainer: {
    height: '30%',
    width: '100%',
    borderRadius: 2 * vh,
    alignSelf: 'center',
    // alignItems: 'center',
    // marginLeft: 2 * vh,
    backgroundColor: colors.white,
  },
  close:{
    height: 2.5 * vh,
    width: 2.5 * vh,
    resizeMode: 'contain',
    right: 2 * vh,
    top: 1 * vh,
    alignSelf: 'flex-end'
  },
  imageContainer: {
    alignSelf: 'center',
    marginTop: 1 * vh,
  },
  name: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    // left: 2 * vh,
    resizeMode: 'contain',
    height: 5 * vh,
    width: 5 * vh,
    // backgroundColor: 'red'
  },
  nameFollowerFollowingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default styles;
