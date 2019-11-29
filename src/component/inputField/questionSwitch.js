import React from "react";
import PropTypes from "prop-types";

import Textarea from "./textarea";
import RadioButton from "./radioButton";
import SelectOption from "./selectOption";
import Input from "./input";

export const InputField = props => {
  const { type } = props;

  function renderInput() {
    switch (type) {
      case "radio":
        return <RadioButton {...props} />;
      case "checkbox":
        return <RadioButton {...props} />;
      case "comment":
        return <Textarea {...props} />;
      case "Select":
        return <SelectOption {...props} />;
      default:
        return <Input {...props} />;
    }
  }

  return <div>{renderInput()}</div>;
};

InputField.prototype = {
  type: PropTypes.string.isRequired
};
