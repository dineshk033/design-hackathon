import React from "react";
import PropTypes from "prop-types";

import { InputField } from "../inputField/questionSwitch";

const Question = ({ question, handleInputChange, values }) => {
  return (
    <div key={question.name + question.id} className="form-group">
      <InputField
        {...question}
        values={values}
        handleInputChange={handleInputChange}
      ></InputField>
      {question.valid && (
        <div className="alert alert-danger">Required value</div>
      )}
      <hr />
    </div>
  );
};

export default Question;

Question.prototypes = {
  question: PropTypes.object.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired
};
