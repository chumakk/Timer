import React from "react";
import s from "./Records.module.css";
import Record from "./Record/Record";

const Records = (props) => {
  return (
    <div className={s.container}>
      {props.records.map((record) => (
        <Record
          key={record.id}
          record={record}
          removeRecord={props.removeRecord}
          togglePauseRecord={props.togglePauseRecord}
        />
      ))}
    </div>
  );
};

export default Records;
