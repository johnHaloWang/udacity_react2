import React from 'react';
import { connect } from 'react-redux';

function UserStat({user}) {
    const answer_count = Object.keys(user.answers).length;
    const question_count = user.questions.length;
    const score = answer_count + question_count;
    return (
        <>
            <div className="card mb-3 mx-auto" style={{maxWidth: 540}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img 
                            src={user.avatarURL} 
                            className="img-fluid rounded-start" 
                            alt="..." 
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{user.name}</h5>
                           <div>
                                <div>Answered questions: {answer_count}</div>
                            </div>
                            <div>
                                <div>Created questions: {question_count}</div>
                            </div>
                            <div className='mt-5'>
                                <div>Score: {score}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    )
}
const mapStateToProps = ({users}, {userId}) =>({
    user: userId in users && users[userId]
});

export default connect(mapStateToProps)(UserStat);
