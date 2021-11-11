import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import NavBarLink from "./NavBarLink";
import * as authedUserAction from "../storage/store/actions/authedUser.action";

function NavBar({ authedUser, dispatch, appRoutes }) {
  const onSignOut = () => dispatch(authedUserAction.setAuthedUser(null));

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {" "}
            Would you rather?
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {appRoutes.map((route) => (
                    <li className='nav-item' key={route.path}>
                        <NavBarLink  {...route}/>
                    </li>
              ))}
            </ul>
            {authedUser && (
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <div
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {authedUser.name}
                  </div>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <button className="dropdown-item" onClick={onSignOut}>
                        Sign out
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

const mapStateToProps = ({ authedUser, users }) => ({
  authedUser: authedUser && users[authedUser],
});

export default connect(mapStateToProps)(NavBar);
