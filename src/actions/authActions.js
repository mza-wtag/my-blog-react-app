import { v4 as uuidv4 } from "uuid";
import {
  LOGEDIN_USER,
  LOGGEDOUT_USER,
  REGISTERED_USER,
  UPDATE_USER_PROFILE,
} from "@constants/actionTypes";

export const registerUser = (user) => {
  return (dispatch) => {
    const {
      about,
      firstName,
      fullName,
      lastName,
      profileImage,
      subtitle,
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
      type: REGISTERED_USER,
      payload: newUser,
    });

    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
  };
};

export const loginUser = (user) => {
  return (dispatch) => {
    dispatch({
      type: LOGEDIN_USER,
      payload: user,
    });
    localStorage.setItem("loggedInUser", JSON.stringify(user));
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    dispatch({
      type: LOGGEDOUT_USER,
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
