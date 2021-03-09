import React from "react";
import NewRecord from "./components/NewRecord/NewRecord";
import Records from "./components/Records/Records";
import s from "./Timer.module.css";

const Timer = (props) => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>tracker</h1>
      <NewRecord addRecord={props.addRecord} />
      <Records
        records={props.records}
        removeRecord={props.removeRecord}
        togglePauseRecord={props.togglePauseRecord}
      />
    </div>
  );
};

export default Timer;
