import { createStore, combineReducers } from "redux";
import { userReducer } from "../reducers/authReducer";

const rootReducer = combineReducers({
  user: userReducer,
});

const store = createStore(rootReducer);

export default store;
