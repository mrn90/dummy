import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import CenturyGothic from '../../Wrappers/Text/CenturyGothic';
import styles from './styles';
import Modal from 'react-native-modal';
import {icons, images} from '../../../assets';
import {useDispatch, useSelector} from 'react-redux';
import {getSingleUser} from '../../../actions/singleUser';

const UsersListItem = ({item}) => {
  //   console.log('item', item);
  const [isModalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    getSingleUserData(item);
  };

  const data = useSelector(state => state?.users?.user);
  //   console.log('single user from useSelector', data);

  const getSingleUserData = item => {
    // console.log('item in funct');
    dispatch(getSingleUser(item));
  };

  return (
    <View style={styles.postContainer}>
      <TouchableOpacity
        onPress={() => {
          toggleModal();
        }}
        style={styles.titleContainer}>
        <Text style={styles.post}>{item.id}.</Text>

        {/* <Image source={{uri: item?.avatar_url}} style={styles.image} /> */}
        <CenturyGothic style={styles.postTitle}>{item.login}</CenturyGothic>
      </TouchableOpacity>
      <CenturyGothic style={styles.postTitleUrl}>{item.url}</CenturyGothic>
      <Modal
        isVisible={isModalVisible}
        animationIn={'slideInUp'}
        onBackdropPress={() => toggleModal()}
        style={styles.modal}>
        <View style={styles.modalContainer}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(!isModalVisible);
            }}>
            <Image source={icons.close} style={styles.close} />
          </TouchableOpacity>
          <View style={styles.imageContainer}>
            <Image source={{uri: data?.avatar_url}} style={styles.image} />
          </View>
          <View style={styles.name}>
            <CenturyGothic style={styles.postBody}>Name</CenturyGothic>
            <CenturyGothic style={styles.postBodyText}>
              {data?.name}
            </CenturyGothic>
          </View>
          {data?.location == null ? (
            <CenturyGothic style={styles.locationText}>Null</CenturyGothic>
          ) : (
            <CenturyGothic style={styles.locationText}>
              <CenturyGothic style={styles.locationText}>
                {data?.location}
              </CenturyGothic>
            </CenturyGothic>
          )}
          <View style={styles.nameFollowerFollowingContainer}>
            <CenturyGothic style={styles.postBody}>Followers</CenturyGothic>
            <CenturyGothic style={styles.postBody}>Followings</CenturyGothic>
            {/* <CenturyGothic style={styles.postBody}>{item.title}</CenturyGothic> */}
          </View>
          <View style={styles.nameFollowerFollowingContainer}>
            <CenturyGothic style={styles.postBodyText}>
              {data?.followers}
            </CenturyGothic>
            <CenturyGothic style={styles.postBodyText}>
              {data?.following}
            </CenturyGothic>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default UsersListItem;
