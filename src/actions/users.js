import {Get_User} from './types';
import axios from 'axios';

export const getUsers = () => async dispatch => {
  const token = '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';
  try {
    axios
      .get('https://api.github.com/users', {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          'X-GitHub-Api-Version': '2022-11-28'
        },
      })
      .then(res => {
        if (res.data.length) {
          // console.log('users', res?.data)
          dispatch({
            type: Get_User,
            payload: res.data,
          });
        }
      });
  } catch (err) {
    console.log(err);
  }
};



