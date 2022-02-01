import Select from "react-select";
import AsyncSelect from "react-select/async";

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
 *
 * @param {*} isAsync define if options of the select are retrieved asynchronously
 * @param {*} loadOptions function to retrieve options
 */
const SelectInput = ({
  options,
  defaultValue,
  label,
  onChange,
  isSearchable,
  isMulti,
  placeholder = "",
  isClearable,

  //async input parameters
  isAsync,
  loadOptions,
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
      fontFamily: "circular",
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
      fontFamily: "circular",
      fontWeight: "500",
    }),
  };
  return (
    <div className="select__container">
      <div className="select__label">{t(label)}</div>
      {isAsync ? (
        <AsyncSelect
          cacheOptions
          loadOptions={loadOptions}
          defaultValue={defaultValue}
          placeholder={placeholder}
          styles={styles}
          onChange={onChange}
          isSearchable={isSearchable}
          isClearable={isClearable}
        />
      ) : (
        <Select
          options={options}
          defaultValue={defaultValue}
          onChange={onChange}
          isSearchable={isSearchable}
          isMulti={isMulti}
          styles={styles}
          placeholder={placeholder}
          isClearable={isClearable}
        />
      )}
    </div>
  );
};

export default SelectInput;
