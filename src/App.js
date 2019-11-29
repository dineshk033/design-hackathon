import React, { useState, useEffect } from "react";
import { Questions } from "./json";
import { QuestionList } from "./component/question-list/question-list";

function App() {
  const [visible, setVisible] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [result, setResult] = useState({});
  const configuration = {
    validation: true,
    pageSize: 1,
    timer: 1,
    progressBar: true,
    title: "survey-app"
  };

  useEffect(() => {
    const ques = Questions.map((qn, idx) => ({ ...qn, id: idx + 1 }));
    setQuestions(ques);
  }, []);

  const onSubmit = values => {
    //console.log(values);
    setVisible(false);
    setResult(values);
  };
  return (
    <div className="container-fluid row">
      <div className="col-md-5 m-4 card  p-4">
        {visible && (
          <QuestionList
            questions={questions}
            handleSubmit={onSubmit}
            {...configuration}
          />
        )}
        {!visible && (
          <h3 className="alert alert-success">Successfully Submitted</h3>
        )}
      </div>
      <div className="col-md-4 col-offset-1 p-5">
        Response:
        {Object.entries(result).map(el => (
          <div key={el[0]}>{el[0] + " - " + el[1]}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
