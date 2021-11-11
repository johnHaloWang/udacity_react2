import React from "react";
import {connect } from 'react-redux';

import UserStat from './UserStat';

function getCountAndScore(user){
    const answer_count = Object.keys(user.answers).length;
    const question_count = user.questions.length;
    const score = answer_count + question_count;
    return {answer_count, question_count, score};
}

function Leaderboard({usersList}) {
  return <>
    <div className ='text-center fw-bold mb-5'>Leaderboard</div>
    {usersList.map((user)=> (
      <UserStat key={user.id} userId={user.id}>{user}</UserStat>
    ))}
  </>;
}

const mapStateToProps = ({users}) => {
  const usersList = [];
  for(const user in users){
    const scores = getCountAndScore(users[user]);
    usersList.push({id: user, scores});
  }
  usersList.sort((a, b) => b.scores.score - a.scores.score);
  return {
    usersList,
  }
};

export default connect(mapStateToProps)(Leaderboard);

