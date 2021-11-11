import * as questionsAction from "../actions/questions.action";
// import authedUser from "./authedUser.reducer";
const initialState = {};

export default function questions(state = initialState, action) {
  switch (action.type) {
    case questionsAction.types.ADD_QUESTION:
      const newQuestion = action.payload;
      console.log("testing on action.payload::", action.payload);
      if (newQuestion && newQuestion.id in state)
        return { ...state, [newQuestion.id]: newQuestion };
      else{
        console.log("not in state");
      }
      return state;
    
    case questionsAction.types.RECEVIE_QUESTIONS:
        return {...state, ...action.payload};
    
    case questionsAction.types.ADD_VOTE_TO_QUESTION:
        const { authedUser, qid, answer} = action.payload;
        if(qid in state){
            const updatedQ = state[qid];
            updatedQ[answer].votes.push(authedUser)
            return {...state, [updatedQ.id]:{...updatedQ}};
        }
        return state;
    default:
      return state;
  }
}
