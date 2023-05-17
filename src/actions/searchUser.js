import {Get_Search_User} from './types';
import axios from 'axios';

export const getSearchUser = obj => async dispatch => {
  console.log('obj', obj);
  const token = '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';
  try {
    axios
      .get('https://api.github.com/users/' + obj, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          'X-GitHub-Api-Version': '2022-11-28',
        },
      })
      .then(res => {
        // console.log('res', res.data)
        if (res?.data) {
          console.log('user==>', res?.data);
          dispatch({
            type: Get_Search_User,
            payload: res?.data,
          });
        }
      });
  } catch (err) {
    console.log(err);
  }
};
