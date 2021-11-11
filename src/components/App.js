import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router";

import * as commonAction from "../storage/store/actions/common.action";
import Signin from "./Signin";
import NavBar from "./NavBar";
import Dashboard from "./Dashboard";
import NewQuestions from "./NewQuestions";
import Leaderboard from "./Leaderboard";
import QuestionPage from "./QuestionPage";

const appRoutes = [
  {
    name: "Home",
    path: "/",
    exact: true,
  },
  {
    name: "New Questions",
    path: "/add",
    exact: true,
  },
  {
    name: "Leader Board",
    path: "/leaderboard",
    exact: true,
  },
];

const AuthedRoutes = (
  <Switch>
    <Route {...appRoutes[0]}>
      <Dashboard />
    </Route>
    <Route {...appRoutes[1]}>
      <NewQuestions />
    </Route>
    <Route {...appRoutes[2]}>
      <Leaderboard />
    </Route>
    <Route path='/question/:id' >
      <QuestionPage />
    </Route>
  </Switch>
);

const NonAuthedRoutes = (
  <Switch>
    <Route>
      <Signin />
    </Route>
  </Switch>
);

function App({ authedUser, dispatch }) {
  useEffect(() => {
    dispatch(commonAction.fetchDataAsync());
  }, [dispatch]);

  return (
    <>
      <NavBar appRoutes={appRoutes} />
      <div className="container mt-5">
        {authedUser ? AuthedRoutes : NonAuthedRoutes}
      </div>
    </>
  );
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  };
};

export default connect(mapStateToProps)(App);
