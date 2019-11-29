import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const Input = props => {
  const inputRef = useRef();

  useEffect(() => {
    if (props.valid) {
      inputRef.current.focus();
    }
  });
  const values = props.values[props.name];
  return (
    <div className="form-group">
      <label
        htmlFor={props.name}
        className={props.valid ? "form-label text-danger" : "form-label"}
      >
        {props.id}. {props.title}
      </label>
      <input
        ref={inputRef}
        className="form-control"
        id={props.name}
        name={props.name}
        type={props.type}
        value={values ? values : ""}
        onChange={props.handleInputChange}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  valid: PropTypes.bool.isRequired,
  handleInputChange: PropTypes.func.isRequired
};
