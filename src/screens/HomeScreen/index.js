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

// const data = [
//   {
//     id: 1,
//     title: 'First Post',
//     body: 'Hello, this is the first post',
//   },
//   {
//     id: 2,
//     title: 'Second Post',
//     body: 'Hello, this is the second post',
//   },
//   {
//     id: 3,
//     title: 'Third Post',
//     body: 'Hello, this is the third post',
//   },
// ];
const Home = props => {
  const [searchText, setSearchText] = useState('');
  const [timeoutId, setTimeoutId] = useState(null);

  const data = useSelector(state => state?.users?.users);

  const searchedUser = useSelector(state => state?.users.user);
  console.log('DATA FROM  useSelector', searchedUser);
  const dispatch = useDispatch();

  const getUserData = () => {
    dispatch(getUsers());
  };

  useEffect(() => {
    getUserData();
  }, [searchedUser]);

  const renderUsers = ({item}) => {
    return <UsersListItem item={item} />;
  };

  // const handleSearch = text => {
  //   // Perform the actual search operation here
  //   console.log('Searching for:', text);

  // };

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
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('SearchScreen');
        }}>
        <View style={styles.searchContainer}>
          <Text
            // placeholder="Search.."
            placeholderTextColor={colors.grayText6}
            style={styles.search}
            // onChangeText={handleChangeText}
            value={searchText}>
            Search..
          </Text>

          <View style={styles.iconContainer}>
            <Image source={icons.searchIcon} style={styles.searchIcon} />
          </View>
        </View>
      </TouchableOpacity>
      <FlatList data={data} renderItem={renderUsers} />
      {/* {searchedUser ? (
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
      ) : (
        <Text></Text>
      )} */}
    </View>
  );
};

export default Home;
