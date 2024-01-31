import { createStore, applyMiddleware, combineReducers } from "redux";
import { authReducer } from "../reducers/authReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  auth: authReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
