import Select from "react-select";
import { useTranslate } from "../../../utils/useTranslate";

import "./SelectInput.scss";

/**
 *
 * @param {Array} options options in format [{value:'input value', label:'input label'}]
 * @param {*} defaultValue default value of the select
 * @param {*} label name displayed on top of select
 * @param {*} onChange on change action
 * @param {*} inputColor color for borders of the input
 * @param {*} isSearchable define if user can search in the input
 * @param {*} isMulti define if multi value is enabled
 */
const SelectInput = ({
  options,
  defaultValue,
  label,
  onChange,
  isSearchable,
  isMulti,
  placeholder = "",
}) => {
  const { t } = useTranslate();
  const styles = {
    container: (styles) => ({ ...styles, width: "100%" }),
    control: (styles) => ({
      ...styles,
      border: 0,
      boxShadow: "none",
      width: "100%",
      fontSize: "14px",
      fontFamily: "eina",
      fontWeight: "500",
    }),
    option: (styles, { isFocused, isSelected }) => ({
      ...styles,
      backgroundColor: isSelected
        ? "#9652B6"
        : isFocused
        ? "#e8d0f2"
        : undefined,
      fontSize: "14px",
      fontFamily: "eina",
      fontWeight: "500",
    }),
  };
  return (
    <div className="select__container">
      <div className="select__label">{t(label)}</div>
      <Select
        options={options}
        defaultValue={defaultValue}
        onChange={onChange}
        isSearchable={isSearchable}
        isMulti={isMulti}
        styles={styles}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SelectInput;
