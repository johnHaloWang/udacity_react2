import * as API from '../../api';
// ACTION TYPES

export const types = {
  ADD_USER: "ADD_USER",
  RECEVIE_USERS: "RECEIVE_USERS",
  ADD_ANSWER_TO_USER: "ADD_ANSWER_TO_USERR",
  ADD_QUESTION_TO_USER: "ADD_QUESTION_TO_USER",
};

//ACTION CREATOERS
export const adduser = (user) => {
  return {
    type: types.ADD_USER,
    payload: user,
  };
};

export const addAnswerToUser = (voteInfo) => {
    return {
        type: types.ADD_ANSWER_TO_USER,
        payload: voteInfo,
      };
}

export const addQuestionToUser = (qInfo) => {
    return {
        type: types.ADD_QUESTION_TO_USER,
        payload: qInfo,
      };
}

export const recevieUsers = (users) => {
  return {
    type: types.RECEVIE_USERS,
    payload: users,
  };
};

export const recevieUsersAsync = () => async (dispatch, getState) =>{
    const users = await API.getUsers();
    dispatch(recevieUsers(users));
}