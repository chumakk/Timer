const ADD_RECORD = "ADD_RECORD";
const REMOVE_RECORD = "REMOVE_RECORD";
const TOGGLE_PAUSE_RECORD = "TOGGLE_PAUSE_RECORD";

const initialState = {
  records: [
    {
      id: "",
      name: "",
      time: "",
      paused: false,
    },
  ],
};

const recordsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RECORD:
      const record = {
        id: state.records.length+1,
        name:  action.name,
        time: action.time,
        paused: false,
      }
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
        records: state.records.map((record) =>
          record.id === action.recordId
            ? (record.paused = action.togglePause)
            : record
        ),
      };

    default:
      return state;
  }
};
export const addRecord = (name,time) => {
  return {
    type: ADD_RECORD,
    name,
    time
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

export default recordsReducer;
