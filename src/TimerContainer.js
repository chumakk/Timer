import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import {
  addRecord,
  removeRecord,
  togglePauseRecord,
  setRecords,
  updateRecordTime,
  updateRecordTimeStart,
} from "./redux/recordsReducer";
import Timer from "./Timer";

class TimerContainer extends React.Component {
  componentDidMount() {
    this.timer = setInterval(() => {
      this.props.records.forEach((record) => {
        if (!record.paused) {
          this.props.updateRecordTime(record.id, moment().format());
        } else {
          const diff = moment(record.time).diff(
            moment(record.timeStart),
            "seconds"
          );
          const currentTime = moment();

          this.props.updateRecordTime(record.id, currentTime.format());
          this.props.updateRecordTimeStart(
            record.id,
            currentTime.subtract(diff, "seconds").format()
          );
        }
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return <Timer {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  records: state.records.records,
});

const mapDispatchToProps = {
  addRecord,
  removeRecord,
  togglePauseRecord,
  setRecords,
  updateRecordTime,
  updateRecordTimeStart,
};

export default connect(mapStateToProps, mapDispatchToProps)(TimerContainer);
