import { createStore, applyMiddleware, combineReducers } from "redux";
import { blogReducer } from "@reducers/blogReducer";
import { authReducer } from "@reducers/authReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  auth: authReducer,
  blog: blogReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
