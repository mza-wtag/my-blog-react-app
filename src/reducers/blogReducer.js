import { ADD_BLOG_POST, GET_BLOG_POSTS } from "@constants/actionTypes";

const initialState = JSON.parse(localStorage.getItem("blogPosts")) || [];

export const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BLOG_POST:
      return [action.payload, ...state];
    case GET_BLOG_POSTS:
      return action.payload;
    default:
      return state;
  }
};
