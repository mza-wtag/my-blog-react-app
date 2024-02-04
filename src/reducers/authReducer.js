import {
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
  UPDATE_USER_PROFILE,
} from "../constants/actionTypes";

const initialState = {
  users: [],
  loggedInUser: JSON.parse(localStorage.getItem("loggedInUser")) || null,
};

export const authReducer = (state = initialState, action) => {
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
      localStorage.removeItem("loggedInUser");
      return {
        ...state,
        loggedInUser: null,
      };
    case UPDATE_USER_PROFILE:
      const { profileData } = action.payload;

      // Update loggedInUser with new profileData
      const updatedLoggedInUser = {
        ...state.loggedInUser,
        ...profileData,
      };

      // Update localStorage with the updated loggedInUser
      localStorage.setItem("loggedInUser", JSON.stringify(updatedLoggedInUser));

      return {
        ...state,
        loggedInUser: updatedLoggedInUser,
      };
    default:
      return state;
  }
};
