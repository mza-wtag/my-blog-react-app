import { ADD_BLOG_POST } from "../constants/actionTypes";

export const addBlogPostAndLocalStorage = (post) => {
  return (dispatch) => {
    dispatch({
      type: ADD_BLOG_POST,
      payload: post,
    });
    const existingPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
    const updatedPosts = [...existingPosts, post];
    localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
  };
};
