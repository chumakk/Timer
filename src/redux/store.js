import { combineReducers, createStore } from "redux";
import recordsReducer from "./recordsReducer";

const redusers = combineReducers({
  records: recordsReducer,
});

const store = createStore(
  redusers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
