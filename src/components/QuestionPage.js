import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Question from './Question';
import QuestionResults from './QuestionResults';
import QuestionVote from './QuestionVote';

function QuestionPage({question, id, hasVoted}) {
    if(question){
        return <>
            <Question id={id}>
                {hasVoted ? <QuestionResults />:<QuestionVote/>}
            </Question>
    </>;
    }else{
        return <>
            <div className="text-center">Question not found</div>
        </>
    }
}

const mapStateToProps = ({ authedUser, questions, users }, {match}) => {
    const { id } = match.params;
    let hasVoted = false;
    if(authedUser in users){
        const user = users[authedUser];
        hasVoted = id in user.answers;
    }
    return {
        question: id in questions && questions[id],
        id,
        hasVoted,
    };
};
export default withRouter(connect(mapStateToProps)(QuestionPage));
