const ADD_RECORD = "ADD_RECORD";
const REMOVE_RECORD = "REMOVE_RECORD";
const TOGGLE_PAUSE_RECORD = "TOGGLE_PAUSE_RECORD";
const UPDATE_RECORD_TIME = "UPDATE_RECORD_TIME";
const UPDATE_RECORD_TIME_START = "UPDATE_RECORD_TIME_START";

const initialState = {
  records: [],
};

const recordsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RECORD:
      const record = {
        id: state.records.length + 1,
        name: action.name || action.time,
        time: action.time,
        timeStart: action.time,
        paused: false,
      };
      return { ...state, records: [...state.records, record] };

    case REMOVE_RECORD:
      return {
        ...state,
        records: state.records.filter(
          (record) => action.recordId !== record.id
        ),
      };

    case TOGGLE_PAUSE_RECORD:
      return {
        ...state,
        records: state.records.map((record) => {
          if (record.id === action.recordId) {
            return { ...record, paused: action.togglePause };
          } else {
            return record;
          }
        }),
      };

    case UPDATE_RECORD_TIME:
      return {
        ...state,
        records: state.records.map((record) => {
          if (record.id === action.recordId) {
            return { ...record, time: action.time };
          } else {
            return record;
          }
        }),
      };

    case UPDATE_RECORD_TIME_START:
      return {
        ...state,
        records: state.records.map((record) => {
          if (record.id === action.recordId) {
            return { ...record, timeStart: action.time };
          } else {
            return record;
          }
        }),
      };
    default:
      return state;
  }
};
export const addRecord = (name, time) => {
  return {
    type: ADD_RECORD,
    name,
    time,
  };
};

export const removeRecord = (recordId) => {
  return {
    type: REMOVE_RECORD,
    recordId,
  };
};

export const togglePauseRecord = (recordId, togglePause) => {
  return {
    type: TOGGLE_PAUSE_RECORD,
    recordId,
    togglePause,
  };
};

export const updateRecordTime = (recordId, time) => {
  return {
    type: UPDATE_RECORD_TIME,
    recordId,
    time,
  };
};

export const updateRecordTimeStart = (recordId, time) => {
  return {
    type: UPDATE_RECORD_TIME_START,
    recordId,
    time,
  };
};

export default recordsReducer;
