import {
  ADD_BLOG_POST,
  EDIT_BLOG_POST,
  GET_BLOG_POSTS,
} from "@constants/actionTypes";
import { v4 as uuidv4 } from "uuid";

export const addBlogPostInLocalStorage = (post) => {
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

export const getBlogPostsFromLocalStorage = () => {
  return (dispatch) => {
    const existingPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
    dispatch({
      type: GET_BLOG_POSTS,
      payload: existingPosts,
    });
  };
};

export const editBlogPostInLocalStorage = (postId, updatedPost) => {
  return (dispatch) => {
    dispatch({
      type: EDIT_BLOG_POST,
      payload: { postId, updatedPost },
    });

    const existingPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
    const updatedPosts = existingPosts.map((post) =>
      post.id === postId ? updatedPost : post
    );
    localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
  };
};
