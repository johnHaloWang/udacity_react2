import React, { useState } from "react";
import { connect } from "react-redux";

import Question from './Question';
import QuestionRreview from "./QuestionRreview";

function Dashboard({answered, unanswered}) {
  const [tab, setTab] = useState('unanswered');
  console.log(unanswered);
  const showQuestions = tab === 'unanswered' ? unanswered: answered;
  return (
    <div className="card text-center">
      <div className="card-header">
        <ul className="nav nav-tabs card-header-tabs">
          <li className="nav-item">
            <button
              className={`nav-link ${tab === 'unanswered' && 'active'}`}
              onClick={() => setTab('unanswered')}
            >
              Unanswered
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${tab === 'answered' && 'active'}`}
              onClick={() => setTab('answered')}
            >
              Answered
            </button>
          </li>
        </ul>
      </div>
      <div className="card-body">
        <div className="card-text">
            {showQuestions.map((q) => (
                <Question key={q} id={q}>
                    <QuestionRreview />
                </Question>
            ))}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({authedUser, questions, users}) => {
    let unanswered = [];
    let answered = [];
    console.log("questions", questions);
    if(authedUser in users){
        const user = users[authedUser];
        answered = Object.keys(user.answers).sort(
            (a, b)=>questions[b].timestamp - questions[a].timestamp
        );
        unanswered = Object.keys(questions).filter((q) => !(q in user.answers));
    }
    return {
        answered,
        unanswered
    };
}

export default connect(mapStateToProps)(Dashboard);
