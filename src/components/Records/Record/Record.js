import React from "react";
import s from "./Record.module.css";
import diffTime from "../../../assets/diffTime/diffTime";

const Record = (props) => {
  const deleteRecord = (id) => {
    props.removeRecord(id);
  };

  const togglePauseRecord = (id, toggle) => {
    props.togglePauseRecord(id, toggle);
  };

  const timer = diffTime(props.record.time, props.record.timeStart);

  return (
    <div
      className={
        !props.record.paused ? s.record + " " + s.launchedRecord : s.record
      }
    >
      <div className={s.recordNameWrapper}>
        <div className={s.recordName}>{props.record.name}</div>
      </div>

      <div className={s.currentTime}>{timer}</div>
      <div className={s.recordButtonWrapper}>
        {!props.record.paused ? (
          <button
            className={s.recordButton}
            onClick={() => togglePauseRecord(props.record.id, true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30"
              viewBox="0 0 25 25"
              width="30"
            >
              <path d="M10 16c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1s-1 .45-1 1v6c0 .55.45 1 1 1zm2-14C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm2-4c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1s-1 .45-1 1v6c0 .55.45 1 1 1z" />
            </svg>
          </button>
        ) : (
          <button
            className={s.recordButton}
            onClick={() => togglePauseRecord(props.record.id, false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 25"
              fill="black"
              width="30"
              height="30"
            >
              <path d="M10.8 15.9l4.67-3.5c.27-.2.27-.6 0-.8L10.8 8.1c-.33-.25-.8-.01-.8.4v7c0 .41.47.65.8.4zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
          </button>
        )}
      </div>
      <div className={s.recordButtonWrapper}>
        <button
          className={s.recordButton}
          onClick={() => deleteRecord(props.record.id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30"
            fill="#d2697a"
            viewBox="0 0 25 25"
            width="30"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M7 12c0 .55.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1zm5-10C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Record;
