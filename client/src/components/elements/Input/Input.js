import { useState } from "react";
import { faEye, faEyeSlash } from "@fortawesome/fontawesome-free-regular";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useTranslate } from "../../../utils/useTranslate";
import "./Input.scss";

const Input = ({ placeholder, value, onChange, type, inputColor }) => {
  const { t } = useTranslate();
  const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  const [isHidePassword, setIsHidePassword] = useState(true);
  const [inputType, setInputType] = useState(type);
  const showPasswordIcon =
    (!isHidePassword && inputType === "text") ||
    (isHidePassword && inputType === "password");

  const setViewPassword = () => {
    inputType === "password" ? setInputType("text") : setInputType("password");
    setIsHidePassword(!isHidePassword);
  };
  return (
    <div
      className="Input__container"
      style={{
        border: focused ? `1px solid ${inputColor}` : `1px solid #dadee3`,
      }}
    >
      <div className="Input__placeholder">{t(placeholder)}</div>
      <input
        style={{ zIndex: "0" }}
        className="Input__input"
        autoComplete="new-password"
        value={value}
        onChange={(e) => {
          e.preventDefault();
          onChange(e);
        }}
        type={inputType || "text"}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {showPasswordIcon && (
        <div
          className="Input__showPassword"
          onClick={() => {
            setViewPassword();
          }}
        >
          {isHidePassword ? (
            <FontAwesomeIcon icon={faEye} />
          ) : (
            <FontAwesomeIcon icon={faEyeSlash} />
          )}
        </div>
      )}
    </div>
  );
};

export default Input;
