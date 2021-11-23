import "./Snack.scss";
import { connect } from "react-redux";
import { resetSnack } from "../../../actions/snackActions";
import { useEffect, useState } from "react";

const Snack = (props) => {
  const color_types = { error: "#f55951", success: "#36b336" };
  const [currentSnackIds, setCurrentSnackIds] = useState({
    timer: null,
    animation: null,
  });

  const launchTimer = () => {
    document.getElementById("snack").style.opacity = 1;
    const timerID = setTimeout(() => {
      props.resetSnack();
      setCurrentSnackIds({ timer: null, animation: null });
    }, props.snack.duration);
    const animationID = setTimeout(() => {
      document.getElementById("snack").style.opacity = 0;
    }, props.snack.duration - 500);
    setCurrentSnackIds({ timer: timerID, animation: animationID });
  };

  const clearTimer = () => {
    document.getElementById("snack").style.opacity = 0;
    clearTimeout(currentSnackIds.timer);
    clearTimeout(currentSnackIds.animation);
  };

  const relaunchTimer = () => {
    clearTimer();
    launchTimer();
  };

  useEffect(() => {
    if (props.snack.show === true) {
      const isSnackRunning = currentSnackIds.timer !== null;
      isSnackRunning ? relaunchTimer() : launchTimer();
    }
  }, [props]);

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
