import React from "react";

import "./spinner.css";

export const Spinner = () => {
  return (
    <div className="text-center ">
      <div
        className="spinner-border"
        aria-hidden="true"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      >
        <span className="sr-only">Form Auto Submitting...</span>
      </div>
      <span className="d-block">Form Submitting...</span>
    </div>
  );
};
