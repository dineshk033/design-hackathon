import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const Textarea = props => {
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
        {props.id}. {props.title}
      </label>
      <textarea
        ref={inputRef}
        className="form-control"
        rows="5"
        id={props.name}
        name={props.name}
        type={props.type}
        value={props.values[props.name]}
        onChange={props.handleInputChange}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Textarea;

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  valid: PropTypes.bool.isRequired,
  handleInputChange: PropTypes.func.isRequired
};
