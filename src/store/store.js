import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { blogReducer } from "@reducers/blogReducer";
import { authReducer } from "@reducers/authReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  blog: blogReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
