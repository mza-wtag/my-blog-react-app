import { REGISTER_USER, LOGIN_USER } from "./../constants/actionTypes";

export const registerUser = (user) => {
  return (dispatch) => {
    dispatch({
      type: REGISTER_USER,
      payload: user,
    });
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    existingUsers.push(user);
    localStorage.setItem("users", JSON.stringify(existingUsers));
  };
};

export const loginUser = (user) => ({
  type: LOGIN_USER,
  payload: user,
});

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
      localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
      navigate("/");
    } else {
      errorMessageSetter("Invalid username or password");
    }
  };
};
