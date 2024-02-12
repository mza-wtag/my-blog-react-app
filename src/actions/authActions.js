import { REGISTER_USER, LOGIN_USER, LOGOUT_USER } from "@constants/actionTypes";

export const registerUser = (user) => {
  return (dispatch) => {
    dispatch({
      type: REGISTER_USER,
      payload: user,
    });
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
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
