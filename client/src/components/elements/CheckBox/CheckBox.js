import "./CheckBox.scss";
import { BsCheckLg } from "react-icons/bs";

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
        <BsCheckLg style={{ color: "white" }} />
      </div>
      <div className="checkbox__text">{children}</div>
    </div>
  );
};

export default CheckBox;
