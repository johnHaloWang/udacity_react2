import React from "react";
import { connect } from "react-redux";
import { formateDate } from "../utils/helper";

function Question(props) {
  const { author, question, children } = props;
  
  return (
    <>
      <div className="card mb-3 mx-auto" style={{ maxWidth: 540 }}>
        <div className='card-header'>{author.name} asks</div>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={author.avatarURL}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Would you rather?</h5>
              {children && React.cloneElement(children, {...props})}
            </div>
          </div>
        </div>
        <div className="card-footer text-muted">
          {formateDate(question.timestamp)}
        </div>
      </div>
    </>
  );
}

const mapStateToProps = ({ questions, users }, { id }) => ({
  question: id in questions && questions[id],
  author:
    questions[id] &&
    questions[id].author in users &&
    users[questions[id].author],
});
export default connect(mapStateToProps)(Question);
