import React from 'react'
import { connect } from 'react-redux';

function getVotes(question){
    const count = {
        optionOne: 0,
        optionTwo: 0,
    };
    count.optionOne = question.optionOne.votes.length;
    count.optionTwo = question.optionTwo.votes.length;
    const total = count.optionOne + count.optionTwo;
    return {
        ...count,
        total,
    }
}

function getPrecentage(decimal){
    return Math.round(decimal * 100);
}

const votedStyle = {border: '1px solid blue', padding:10};

function QuestionResults({authedUser, question}) {
    const votes = getVotes(question);
    const voted = authedUser.answers[question.id];
    return (
        <>
            <div style={voted === 'optionOne'?votedStyle:{}}>
                <div className="progress">
                    <div 
                        className="progress-bar" 
                        role="progressbar" 
                        style={{
                            width: `${getPrecentage(votes.optionOne / votes.total)}%`
                        }} 
                        aria-valuenow={getPrecentage(votes.optionOne / votes.total)} 
                        aria-valuemin="0" 
                        aria-valuemax="100"
                    >
                        {getPrecentage(votes.optionOne/votes.total)}%
                    </div>
                </div>
                <div className='text-center'>
                     {votes.optionOne} / {votes.total}
                </div>
            </div>
            <div className='mt-3'></div>
            <div style={voted === 'optionTwo'?votedStyle:{}}>
                <div className="progress">
                    <div 
                        className="progress-bar" 
                        role="progressbar" 
                        style={{
                            width: `${getPrecentage(votes.optionTwo / votes.total)}%`
                        }} 
                        aria-valuenow={getPrecentage(votes.optionTwo / votes.total)}
                        aria-valuemin="0" 
                        aria-valuemax="100"
                    >
                        {getPrecentage(votes.optionTwo/votes.total)}%
                    </div>
                </div>
                <div className='text-center'>
                    {votes.optionTwo} / {votes.total}
                </div>
                
            </div>
        </>
    )
}

const mapStateToProps = ({ authedUser, users }) => ({
    authedUser: authedUser in users && users[authedUser],
});

export default connect(mapStateToProps )(QuestionResults)
