import * as usersAction from "../actions/users.action";
const initialState = {};

export default function users(state = initialState, action) {
  
  switch (action.type) {
    case usersAction.types.ADD_USER:
      const newUser = action.payload;
      if (newUser && newUser.id in state)
        return { ...state, [newUser.id]: newUser };
      return state;

    case usersAction.types.RECEVIE_USERS:
        return {...state, ...action.payload};

    case usersAction.types.ADD_ANSWER_TO_USER:
        let {authedUser, qid, answer} = action.payload;
        if(authedUser in state){
            const updatedUser = state[authedUser];

            updatedUser.answers[qid] = answer;
            return {...state, [updatedUser.id]: {...updatedUser}};
        }
        return state;

    case usersAction.types.ADD_QUESTION_TO_USER:
      const quUserid = action.payload.authedUser;
      const quQid = action.payload.qid;
      if(quUserid in state){
        const quUser = state[quUserid];
        quUser.questions.push(quQid);
        return {...state, [quUserid]:{...quUser}};
      }
      return state;
    default:
      return state;
  }}
