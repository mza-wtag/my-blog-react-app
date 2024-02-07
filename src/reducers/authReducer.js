import {
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
  UPDATE_USER_PROFILE,
} from "@constants/actionTypes";

const initialState = {
  users: JSON.parse(localStorage.getItem("users")) || [],
  loggedInUser: JSON.parse(localStorage.getItem("loggedInUser")) || null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      const newUser = action.payload;
      const updatedUsers = [...state.users, newUser];
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      return {
        ...state,
        users: updatedUsers,
      };
    case LOGIN_USER:
      localStorage.setItem("loggedInUser", JSON.stringify(action.payload));
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
      const { userId, profileData } = action.payload;
      const updatedUsersList = state.users.map((user) => {
        if (user.userId === userId) {
          return {
            ...user,
            ...profileData,
          };
        }
        return user;
      });

      localStorage.setItem("users", JSON.stringify(updatedUsersList));
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          ...state.loggedInUser,
          ...profileData,
        })
      );

      return {
        ...state,
        users: updatedUsersList,
        loggedInUser: {
          ...state.loggedInUser,
          ...profileData,
        },
      };
    default:
      return state;
  }
};
