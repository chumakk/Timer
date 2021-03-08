import { combineReducers, createStore } from "redux";
import recordsReducer from "./recordsReducer";

const redusers = combineReducers({
  records: recordsReducer,
});

const store = createStore(redusers);

export default store;
