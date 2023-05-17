import {Get_Single_User} from './types';
import axios from 'axios';

export const getSingleUser = obj => async dispatch => {
  console.log('obj', obj?.login);
  const token = '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';
  try {
    axios
      .get('https://api.github.com/users/' + obj?.login, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          'X-GitHub-Api-Version': '2022-11-28',
        },
      })
      .then(res => {
        // console.log('res', res.data)
        if (res?.data) {
          // console.log('user==>', res?.data);
          dispatch({
            type: Get_Single_User,
            payload: res?.data,
          });
        }
      });
  } catch (err) {
    console.log(err);
  }
};
