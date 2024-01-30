import { ADD_BLOG_POST, INIT_BLOG_POSTS } from "../constants/actionTypes";
import { v4 as uuidv4 } from "uuid";

export const addBlogPostAndLocalStorage = (post) => {
  return (dispatch) => {
    const id = uuidv4();
    const createdAt = new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "2-digit",
      year: "numeric",
    });
    const postWithId = {
      ...post,
      id,
      createdAt,
    };

    dispatch({
      type: ADD_BLOG_POST,
      payload: postWithId,
    });
    const existingPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
    const updatedPosts = [postWithId, ...existingPosts];
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
