import React, {useState} from 'react'
import { connect } from 'react-redux';

import * as commonAction from '../storage/store/actions/common.action';

function QuestionVote({authedUser, question, dispatch}) {
    
    const {optionOne, optionTwo } = question;
    console.log("testing, ", optionOne);
    const [radio, setRatio] = useState('optionOne');
    const onVote = ()=>{
        const voteInfo = {authedUser, qid: question.id, answer: radio};
        dispatch(commonAction.saveQuestionAnswer(voteInfo));
    }

    return (
        <>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="optionOne" id="optionOne" value="optionOne" 
                    checked={radio==='optionOne'?true:false}
                    onChange = {()=>setRatio('optionOne')} 
                />
                <label className="form-check-label" 
                    onClick={()=>setRatio('optionTwo')}>
                    {optionOne.text}
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="optionTwo" id="optionTwo" value="optionTwo"
                    checked={radio==='optionTwo'?true:false}
                    onChange = {()=>setRatio('optionTwo')} 
                />
                <label 
                className="form-check-label" 
                onClick={()=>setRatio('optionTwo')}>
                    {optionTwo.text}
                </label>
            </div>
            <button className='btn btn-primary w-100' onClick={onVote} >Vote</button>
        </>
    )
}

const mapStateToProps = ({ authedUser }) => ({
    authedUser,
});
export default connect(mapStateToProps)(QuestionVote);
