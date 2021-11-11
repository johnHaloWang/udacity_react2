import React, { useRef } from "react";
import { connect } from "react-redux";

import * as authedUserAction from '../storage/store/actions/authedUser.action';

function Signin({ dispatch, usersnames }) {
  const selectEl = useRef(null);

  const onLogin = (e) => {
      e.preventDefault();
      if(selectEl&& selectEl.current){
        dispatch(authedUserAction.setAuthedUser(selectEl.current.value));   
      }
      
  };
  return (
    <>
      <form onSubmit={onLogin}>
        <fieldset>
          <div className="mb-3 text-center">
            <label htmlFor="disabledSelect" className="form-label">
              Select user to sign in
            </label>
            <select id="disabledSelect" className="form-select" ref={selectEl}>
              {usersnames.map((username) => (
                <option key={username}>{username}</option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </fieldset>
      </form>
    </>
  );
}

const mapStateToProps = ({ users }) => ({
  usersnames: Object.keys(users),
});

export default connect(mapStateToProps)(Signin);
