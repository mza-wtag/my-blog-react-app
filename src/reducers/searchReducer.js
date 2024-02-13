import { SEARCH_BLOG_POSTS } from "@constants/actionTypes";

const initialState = {
  query: "",
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_BLOG_POSTS:
      return {
        ...state,
        query: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
