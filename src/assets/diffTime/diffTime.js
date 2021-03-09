import moment from "moment";

const formatTime = (time) => {
  return time > 9 ? time : "0" + time;
};

const diffTime = (time, timeStart) => {
  const timeHours = moment(time).diff(moment(timeStart), "hours");

  const timerMinutes = moment(time).diff(moment(timeStart), "minutes") % 60;

  const timeSeconds = moment(time).diff(moment(timeStart), "seconds") % 60;

  return `${formatTime(timeHours)}:${formatTime(timerMinutes)}:${formatTime(
    timeSeconds
  )}`;
};

export default diffTime;
