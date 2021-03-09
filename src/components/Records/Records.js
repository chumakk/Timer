import React from "react";
import Record from "./Record/Record";

const Records = (props) => {
  return (
    <div>
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
