import * as API from "../../api";

import * as usersAction from "./users.action";
import * as questionsAction from "./questions.action";

export const fetchDataAsync = () => async (dispatch, getState) => {
  const [users, questions] = await Promise.all([
    API.getUsers(),
    API.getQuestions(),
  ]);
  dispatch(usersAction.recevieUsers(users));
  dispatch(questionsAction.recevieQuestions(questions));
};

export const saveQuestionAnswer =
  (voteInfo, onSuccess, onError) => async (dispatch, getState) => {
    await API.saveQuestionAnswer(voteInfo);
    dispatch(usersAction.addAnswerToUser(voteInfo));
    dispatch(questionsAction.addVoteToQuestion(voteInfo));
  };
