import {Get_User, Get_Single_User, Get_Search_User} from '../actions/types';

const initalState = {
  users: [],
  user: {},
  loading: true,
};

export default function (state = initalState, action) {
  const {type, payload} = action;
  switch (type) {
    case Get_User:
      return {
        ...state,
        loading: false,
        users: payload,
      };
    case Get_Single_User:
      // console.log('here', payload)
      return {
        ...state,
        loading: false,
        user: payload,
      };
      case Get_Search_User:
      // console.log('here', payload)
      return {
        ...state,
        loading: false,
        user: payload,
      };
    // case Create_Post:
    //   console.log(payload);
    //   return {
    //     ...state,
    //     posts: [payload, ...state.posts],
    //   };
    default:
      return state;
  }
}
