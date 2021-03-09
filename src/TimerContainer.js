import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import {
  addRecord,
  removeRecord,
  togglePauseRecord,
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
          this.props.updateRecordTimeStart(
            record.id,
            moment(record.timeStart).add(1000, "milliseconds").format()
          );
          this.props.updateRecordTime(record.id, moment().format());
        }
      });
    }, 1000);
  }
  componentDidUpdate() {}
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
  updateRecordTime,
  updateRecordTimeStart,
};

export default connect(mapStateToProps, mapDispatchToProps)(TimerContainer);

// const time = moment().format();
// const timeUTC = moment.utc().format();
// const timetUTCParse = moment.parseZone("2021-03-08T1:26:57Z").format();
