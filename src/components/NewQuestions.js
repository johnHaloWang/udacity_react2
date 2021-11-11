import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import * as questionsAction from '../storage/store/actions/questions.action'
// import authedUser from "../storage/store/reducers/authedUser.reducer";

function NewQuestions({dispatch, authedUser, history}) {
  const [optionOneText, setOptionOneText] = useState("");
  const [optionTwoText, setOptionTwoText] = useState("");
  const onNewQuestion = (e)=>{
      e.preventDefault();
      const onSuccess = () => history.push('/');
      const onError = () => console.log('There is an error');
      const newQ = {optionOneText, optionTwoText, author: authedUser};
      dispatch(questionsAction.addQuestionAsync(newQ, onSuccess, onError));
      
  }
  return (
    <>
      <form onSubmit={onNewQuestion}>
        <div className="text-center fw-bold">Would you rather?</div>
        <div className="mb-3">
          <label htmlFor="optionOne" className="form-label">
            Option One
          </label>
          <input
            type="text"
            className="form-control"
            id="optionOne"
            value={optionOneText}
            onChange={(e) => setOptionOneText(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="optionTwo" className="form-label">
            Option Two
          </label>
          <input
            type="text"
            className="form-control"
            id="optionTwo"
            value={optionTwoText}
            onChange={(e) => setOptionTwoText(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

const mapStateToProps = ({ authedUser }) => ({
    authedUser,
  });

export default withRouter(connect(mapStateToProps)(NewQuestions));
