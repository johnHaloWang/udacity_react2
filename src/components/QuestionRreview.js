import React from 'react'
import { withRouter } from 'react-router';

function QuestionRreview({question, history}) {
    const {optionOne, optionTwo} = question;
    const onViewQuestion =()=>{
       history.push(`/question/${question.id}`);

    }
    return (
        <>
             <p className="card-text">{optionOne.text}</p>
              <p>or</p>
              <p className="card-text">{optionTwo.text}</p>  
              <button className="btn btn-primary w-100" onClick={onViewQuestion}>View Poll</button> 
        </>
    )
}

export default withRouter(QuestionRreview);
