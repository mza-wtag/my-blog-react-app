import {
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
  UPDATE_USER_PROFILE,
} from "./../constants/actionTypes";
import { v4 as uuidv4 } from "uuid";
export const registerUser = (user) => {
  return (dispatch) => {
    const {
      firstName,
      lastName,
      fullName,
      subtitle,
      about,
      profileImage,
      ...rest
    } = user;

    const userId = uuidv4();
    const newUser = {
      ...rest,
      userId,
      fullName: fullName || `${firstName} ${lastName}`,
      subtitle: subtitle || null,
      about: about || null,
      profileImage: profileImage || null,
    };

    dispatch({
      type: REGISTER_USER,
      payload: newUser,
    });
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));
  };
};

export const loginUser = (user) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN_USER,
      payload: user,
    });
    localStorage.setItem("loggedInUser", JSON.stringify(user));
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    dispatch({
      type: LOGOUT_USER,
    });
    localStorage.removeItem("loggedInUser");
  };
};

export const loginUserWithLocalStorage = (
  user,
  errorMessageSetter,
  navigate
) => {
  return (dispatch) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const loggedInUser = users.find(
      (storedUser) => storedUser.userName === user.userName
    );

    if (loggedInUser && user.password === loggedInUser.password) {
      dispatch(loginUser(loggedInUser));
      navigate("/");
    } else {
      errorMessageSetter("Invalid username or password");
    }
  };
};

export const updateUserProfile = (userId, profileData) => {
  return {
    type: UPDATE_USER_PROFILE,
    payload: { userId, profileData },
  };
};
