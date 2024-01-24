import { ADD_BLOG_POST } from "../constants/actionTypes";

export const addBlogPost = (post) => ({
  type: ADD_BLOG_POST,
  payload: post,
});

export const addBlogPostToLocalStorage = (post) => {
  const existingPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
  const updatedPosts = [...existingPosts, post];
  localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
};
