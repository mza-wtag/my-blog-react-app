import { LOGIN_USER, REGISTER_USER } from "../constants/actionTypes";

const intialState = {
  users: [],
  loggedInUser: null,
};

export const authReducer = (state = intialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case LOGIN_USER:
      return {
        ...state,
        loggedInUser: action.payload,
      };
    default:
      return state;
  }
};
