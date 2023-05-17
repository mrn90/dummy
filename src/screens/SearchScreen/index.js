import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  Text,
} from 'react-native';
import styles from './styles';
import CenturyGothic from '../../components/Wrappers/Text/CenturyGothic';
import {useDispatch, useSelector} from 'react-redux';
import {getUsers} from '../../actions/users';
import UsersListItem from '../../components/Cards/UsersListItem';
import {colors} from '../../utils/theme';
import {icons} from '../../assets';
import {getSearchUser} from '../../actions/searchUser';

const SearchScreen = props => {
  const [searchText, setSearchText] = useState('');
  const [timeoutId, setTimeoutId] = useState(null);

  const searchedUser = useSelector(state => state?.users.user);
  console.log('DATA FROM  useSelector', searchedUser);
  const dispatch = useDispatch();

  const handleChangeText = text => {
    setSearchText(text);

    // Clearing existing timeout
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const newTimeoutId = setTimeout(() => {
      dispatch(getSearchUser(searchText));
    }, 1000);

    setTimeoutId(newTimeoutId);
  };

  return (
    <View style={styles.mainView}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search.."
          placeholderTextColor={colors.grayText6}
          style={styles.search}
          onChangeText={handleChangeText}
          value={searchText}></TextInput>

        <View style={styles.iconContainer}>
          <Image source={icons.searchIcon} style={styles.searchIcon} />
        </View>
      </View>

      <View style={styles.postContainer}>
        <CenturyGothic style={styles.postTitle}>
          {searchedUser?.id}
        </CenturyGothic>
        {!searchedUser?.name ? (
          <CenturyGothic style={styles.postTitleName}>Null</CenturyGothic>
        ) : (
          <CenturyGothic style={styles.postTitleName}>
            {searchedUser?.name}
          </CenturyGothic>
        )}
      </View>
    </View>
  );
};

export default SearchScreen;
