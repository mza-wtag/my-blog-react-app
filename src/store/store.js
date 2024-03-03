import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { blogReducer } from "@reducers/blogReducer";
import { authReducer } from "@reducers/authReducer";
import searchReducer from "@reducers/searchReducer";
import filterReducer from "@reducers/filterReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  blog: blogReducer,
  search: searchReducer,
  filter: filterReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
