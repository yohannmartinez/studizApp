import "./CheckBox.scss";
import { useEffect } from "react";

import CheckIcon from "../../../assets/icons/check.svg";

const CheckBox = ({ isChecked, children, action }) => {
  return (
    <div className="checkbox__container">
      <div
        className="checkbox__button"
        style={{
          backgroundColor: isChecked ? "#9652b6" : "white",
          border: isChecked ? "none" : "1px solid rgb(206, 206, 206)",
        }}
        onClick={() => {
          action();
        }}
      >
        <img
          src={CheckIcon}
          className="checkbox__button__indicator"
          alt="checkbox"
        />
      </div>
      <div className="checkbox__text">{children}</div>
    </div>
  );
};

export default CheckBox;
