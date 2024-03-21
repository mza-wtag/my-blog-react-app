import supabase from "./../app/supabase";
import { LOGGEDIN_USER, LOGGEDOUT_USER } from "@constants/actionTypes";

export const registerUser = (user) => async (dispatch) => {
  try {
    const { email, password, firstName, lastName, userName } = user;
    const { user: newUser, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          firstName,
          lastName,
          userName,
        },
      },
    });

    if (error) {
      throw new Error(error.message);
    }

    return newUser;
  } catch (error) {
    throw new Error("Failed to register user: " + error.message);
  }
};

export const loginUser = (userData) => {
  return async (dispatch) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: userData.email,
        password: userData.password,
      });

      if (error) {
        throw new Error(error.message);
      }

      dispatch({
        type: LOGGEDIN_USER,
        payload: data.user,
      });

      localStorage.setItem("loggedInUser", JSON.stringify(data.user));

      return data.user;
    } catch (error) {
      throw new Error("Failed to login user: " + error.message);
    }
  };
};

export const logoutUser = () => async (dispatch) => {
  try {
    await supabase.auth.signOut();
    dispatch({
      type: LOGGEDOUT_USER,
    });
    localStorage.removeItem("loggedInUser");
  } catch (error) {
    console.log(error);
    throw new Error("Failed to logout user: " + error.message);
  }
};
