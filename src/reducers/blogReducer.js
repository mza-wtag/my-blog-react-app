import { ADD_BLOG_POST } from "./../constants/actionTypes";

const initialState = {
  blogPosts: [],
};

export const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BLOG_POST:
      return {
        ...state,
        blogPosts: [...state.blogPosts, action.payload],
      };
    default:
      return state;
  }
};
