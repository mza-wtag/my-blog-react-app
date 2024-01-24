import { createStore, applyMiddleware, combineReducers } from "redux";
import { authReducer } from "../reducers/authReducer";
import { blogReducer } from "../reducers/blogReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  auth: authReducer,
  blog: blogReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
