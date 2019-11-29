import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const SelectOption = props => {
  const inputRef = useRef();

  useEffect(() => {
    if (props.valid) {
      inputRef.current.focus();
    }
  });
  return (
    <div className="form-group">
      <label
        htmlFor={props.name}
        className={props.valid ? "form-label text-danger" : "form-label"}
      >
        {props.id}. {props.title}{" "}
      </label>
      <select
        ref={inputRef}
        className="form-control"
        name={props.name}
        value={props.values[props.name]}
        onChange={props.handleInputChange}
      >
        <option value="">{props.placeholder}</option>
        {props.options.map((option, idx) => {
          return (
            <option key={option} value={idx} label={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectOption;

SelectOption.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  valid: PropTypes.bool.isRequired,
  handleInputChange: PropTypes.func.isRequired
};
