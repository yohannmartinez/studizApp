import "./CheckBox.scss";
import { IoMdCheckmark } from "react-icons/io";

const CheckBox = ({ isChecked, children, action }) => {
  return (
    <div className="checkbox__container">
      <div
        className="checkbox__button"
        style={{
          background: isChecked
            ? "linear-gradient(86.03deg,#785bab -8.57%,#a268cf -8.56%,#6b40b6 57.35%,#6525d5 105.45%)"
            : "white",
          border: isChecked ? "none" : "1px solid rgb(206, 206, 206)",
        }}
        onClick={() => {
          action();
        }}
      >
        <IoMdCheckmark className="checkbox__button__indicator" />
      </div>
      <div className="checkbox__text">{children}</div>
    </div>
  );
};

export default CheckBox;
