import React from "react";
import { useState } from "react";
import moment from "moment";
import s from "./NewRecord.module.css";

const NewRecord = (props) => {
  const [inputedValue, setValue] = useState("");

  const onInput = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = () => {
    const currentTime = moment();
    props.addRecord(currentTime.valueOf(),inputedValue, currentTime.format("YYYY-MM-DD HH:mm:ss"));
    setValue("");
  };

  const onEnter = (e) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div className={s.inputWrapper}>
      <div>
        <input
          className={s.mainInput}
          value={inputedValue}
          onChange={onInput}
          onKeyDown={onEnter}
          placeholder="Enter tracker name"
        />
      </div>
      <div>
        <button className={s.submit} onClick={onSubmit}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#fff"
            width="24px"
            height="24px"
          >
            <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NewRecord;
