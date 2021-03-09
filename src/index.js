import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TimerContainer from "./TimerContainer";
import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <TimerContainer />
  </Provider>,
  document.getElementById("root")
);

