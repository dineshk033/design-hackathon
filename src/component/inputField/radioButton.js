import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const RadioButton = props => {
  const inputRef = useRef();

  useEffect(() => {
    if (props.valid) {
      inputRef.current.focus();
    }
  });

  return (
    <div>
      <label
        ref={inputRef}
        htmlFor={props.name}
        className={props.valid ? "form-label text-danger" : "form-label"}
      >
        {props.id}. {props.title}
      </label>
      <div className="form-group">
        {props.choices.map((option, idx) => {
          return (
            <label key={option} className="form-check">
              <input
                className="form-check-input"
                id={props.name}
                name={props.name}
                onChange={props.handleInputChange}
                value={idx}
                checked={props.values[props.name] === idx.toString()}
                type={props.type}
              />
              {option}
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default RadioButton;

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  valid: PropTypes.bool.isRequired,
  handleInputChange: PropTypes.func.isRequired
};
