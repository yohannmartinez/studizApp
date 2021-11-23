import { useState } from "react";

import { useTranslate } from "../../../utils/useTranslate";
import "./TextArea.scss";

const TextArea = ({
  label,
  value,
  onChange,
  placeholder,
  TextAreaColor,
  TextAreaHeight = "200px",
}) => {
  const { t } = useTranslate();
  const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  return (
    <div
      className="TextArea__container"
      style={{
        border: focused ? `1px solid ${TextAreaColor}` : `1px solid #dadee3`,
      }}
    >
      <div className="TextArea__label">{t(label)}</div>
      <textarea
        style={{ zIndex: "0", height: TextAreaHeight }}
        className="TextArea__textArea"
        autoComplete="new-password"
        value={value}
        placeholder={placeholder}
        onChange={(e) => {
          e.preventDefault();
          onChange(e);
        }}
        onFocus={onFocus}
        onBlur={onBlur}
      ></textarea>
    </div>
  );
};

export default TextArea;
