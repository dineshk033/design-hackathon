import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Question from "./question";
import Pagination from "../pagination";
import Timer from "../timer";
import ProgressBar from "../progressbar";
import { Spinner } from "../spinner";
export const QuestionList = props => {
  const {
    questions,
    handleSubmit,
    pageSize,
    validation,
    progressBar,
    timer
  } = props;
  const [timerShow, setTimerShow] = useState(!!timer);
  const [questionList, setQuestionList] = useState([]);
  const [values, setValues] = useState({});
  const [pageConfig, setPageConfig] = useState({ from: 0, to: pageSize });
  const [spinnerShow, setSpinnerShow] = useState(false);
  useEffect(() => {
    const { from, to } = pageConfig;
    const quiz = questions
      .filter((el, idx) => idx >= from && idx < to)
      .map(el => ({ ...el, valid: false }));
    setQuestionList(quiz);
  }, [pageConfig, questions]);

  function renderList() {
    if (!spinnerShow) {
      return questionList.map(question => (
        <Question
          key={question.id}
          question={question}
          values={values}
          handleInputChange={handleInputChange}
        />
      ));
    }
  }

  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    const questionReset = questionList.map(el => ({ ...el, valid: false }));
    setQuestionList(questionReset);
  };

  const previousPage = () => {
    const { from, to } = pageConfig;
    if (from !== 0 && validate()) {
      setPageConfig({ from: from - pageSize, to: to - pageSize });
    }
  };

  const nextPage = () => {
    const { from, to } = pageConfig;
    if (pageConfig.to !== questions.length && validate()) {
      setPageConfig({ from: from + pageSize, to: to + pageSize });
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    const checkValidation = validate();
    if (checkValidation) {
      setSpinnerShow(true);
      setTimeout(() => {
        handleSubmit({ ...values, valid: true });
      }, 5000);
    }
  };

  const timerHandle = () => {
    setSpinnerShow(true);
    setTimeout(() => {
      setTimerShow(false);
      handleSubmit({ ...values, valid: true });
    }, 5000);
  };

  const validate = () => {
    if (!validation) {
      return true;
    }
    const check = questionList.find(
      el => !Object.keys(values).includes(el.name)
    );
    if (check) {
      check.valid = true;
      setQuestionList(
        questionList.map(el =>
          el.name === check.name ? check : { ...el, valid: false }
        )
      );
    }
    return !check;
  };

  const ProgressCheck = () => {
    const match = questions.filter(el => Object.keys(values).includes(el.name))
      .length;
    const ratio = (match / questions.length) * 100;
    return ratio + "%";
  };

  return (
    <React.Fragment>
      <h3 className="card sticky-top text-center text-capitalize">
        <span className="p-3">{props.title}</span>
        {progressBar && (
          <ProgressBar className="card-footer" progress={ProgressCheck()} />
        )}
      </h3>

      <form autoComplete="off" onSubmit={e => onSubmit(e)}>
        {!!timerShow && <Timer timer={timer} handleSubmit={timerHandle} />}
        {renderList()}
        {!!pageSize && !spinnerShow && (
          <Pagination
            nextPage={nextPage}
            previousPage={previousPage}
            {...pageConfig}
            count={questions.length}
          />
        )}
      </form>
      {spinnerShow && <Spinner />}
    </React.Fragment>
  );
};

QuestionList.propTypes = {
  questions: PropTypes.array.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  validation: PropTypes.bool.isRequired,
  progressBar: PropTypes.bool.isRequired,
  timer: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired
};
