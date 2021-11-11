import * as API from '../../api';
import * as usersAction from './users.action';
// ACTION TYPES

export const types = {
  ADD_QUESTION: "ADD_QUESTION",
  RECEVIE_QUESTIONS: "RECEIVE_QUESTIONS",
  ADD_VOTE_TO_QUESTION: "ADD_VOTE_TO_QUESTION",

};

//ACTION CREATOERS
export const addQuestion = (questionInfo) => {
  return {
    type: types.ADD_QUESTION,
    payload: questionInfo,
  };
};

export const recevieQuestions = (questions) => {
  return {
    type: types.RECEVIE_QUESTIONS,
    payload: questions,
  };
};

export const addVoteToQuestion = (voteInfo) => {
    return {
      type: types.ADD_VOTE_TO_QUESTION,
      payload: voteInfo,
    };
  };

export const recevieQuestionsAsync = () => async (dispatch, getState) =>{
    const questions = await API.getQuestions();
    dispatch(recevieQuestions(questions));
}

export const addQuestionAsync = (questionInfo, onSuccess, onError) => async (dispatch, getState) =>{
    try{
        console.log("addQuestionAsync::", questionInfo);
        const question = await API.saveQuestion(questionInfo);
        console.log("addQuestionAsync2::", question);
        dispatch(addQuestion(question));
        dispatch(
          usersAction.addQuestionToUser({
            authUser:question.author, 
            qid: question.id
          })
        );
        if(onSuccess) onSuccess();
    }catch(e){
        if(onError) onError();
    }
    
}