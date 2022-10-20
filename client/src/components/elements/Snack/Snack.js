import "./Snack.scss";

import { useCallback, useEffect, useState } from "react";

import { connect } from "react-redux";
import { resetSnack } from "../../../actions/snackActions";

const Snack = (props) => {
  const color_types = { error: "#f55951", success: "#36b336" };
  const [currentSnackIds, setCurrentSnackIds] = useState({
    timer: null,
    animation: null,
  });

  const launchTimer = useCallback(() => {
    document.getElementById("snack").style.opacity = 1;
    const timerID = setTimeout(() => {
      props.resetSnack();
      setCurrentSnackIds({ timer: null, animation: null });
    }, props.snack.duration);
    const animationID = setTimeout(() => {
      document.getElementById("snack").style.opacity = 0;
    }, props.snack.duration - 500);
    setCurrentSnackIds({ timer: timerID, animation: animationID });
  }, [props]);

  const clearTimer = useCallback(() => {
    document.getElementById("snack").style.opacity = 0;
    clearTimeout(currentSnackIds.timer);
    clearTimeout(currentSnackIds.animation);
  }, [currentSnackIds]);

  const relaunchTimer = useCallback(() => {
    clearTimer();
    launchTimer();
  }, [clearTimer, launchTimer]);

  useEffect(() => {
    if (props.snack.show === true) {
      const isSnackRunning = currentSnackIds.timer !== null;
      isSnackRunning ? relaunchTimer() : launchTimer();
    }
  }, [props, launchTimer, clearTimer, relaunchTimer, currentSnackIds.timer]);

  return props.snack.show ? (
    <div
      className="Snack__globalContainer"
      id="snack"
      onClick={() => {
        clearTimer();
        props.snack.action();
      }}
      style={{ backgroundColor: color_types[props.snack.type] }}
    >
      {props.snack.text}
    </div>
  ) : (
    ""
  );
};
const mapStateToProps = (state) => ({
  snack: state.snack,
});

export default connect(mapStateToProps, { resetSnack })(Snack);
