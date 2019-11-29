import React from "react";
import PropTypes from "prop-types";

const ProgressBar = ({ progress }) => {
  return (
    <div className="progress mt-2 " style={{ height: "7px" }}>
      <div
        className="progress-bar progress-bar-striped"
        role="progressbar"
        style={{ width: progress }}
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  );
};
export default ProgressBar;

ProgressBar.prototype = {
  progress: PropTypes.string.isRequired
};
