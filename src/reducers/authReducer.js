import {
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
} from "../constants/actionTypes";

const intialState = {
  users: [],
  loggedInUser: JSON.parse(localStorage.getItem("loggedInUser")),
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
    case LOGOUT_USER:
      return {
        ...state,
        loggedInUser: null,
      };

    default:
      return state;
  }
};
