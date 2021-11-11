import { combineReducers } from "redux";

import authedUser from "./authedUser.reducer";
import questions from "./questions.reducer";
import users from "./users.reducer";

export default combineReducers({
  authedUser,
  users,
  questions,
});
