import { ADD_BLOG_POST, INIT_BLOG_POSTS } from "../constants/actionTypes";

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

export const initBlogPostsFromLocalStorage = () => {
  return (dispatch) => {
    const existingPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
    dispatch({
      type: INIT_BLOG_POSTS,
      payload: existingPosts,
    });
  };
};
