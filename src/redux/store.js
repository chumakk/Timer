import { combineReducers, createStore } from "redux";
import recordsReducer from "./recordsReducer";
import moment from "moment";
import localStore from "store";

const redusers = combineReducers({
  records: recordsReducer,
});

const localRecords = () => {
  const storage = localStore.get("records");
  if (storage?.records) {
    return {
      records: storage.records.map((record) => {
        if (!record.paused) {
          return { ...record, time: moment().format() };
        } else {
          const diff = moment(record.time).diff(
            moment(record.timeStart),
            "seconds"
          );
          const currentTime = moment();
          return {
            ...record,
            time: currentTime.format(),
            timeStart: currentTime.subtract(diff, "seconds").format(),
          };
        }
      }),
    };
  } else {
    return {
      records: [],
    };
  }
};

const store = createStore(
  redusers,
  { records: localRecords() },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  localStore.set("records", store.getState().records);
});

export default store;
