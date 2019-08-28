import React from "react";
// import Answer from "../Answer/Answer";
import Media from "components/Media/Media";

const Question = props => {
  return (
    <>
      <div className="row p-3">
        <div className="media-wrapper col-md-6 bg-success">
          <Media {...props} />
        </div>

        <div className="navigation-wrapper col-md-6 bg-warning">
          <div className="row">
            <div className="col-md-12">{props.q.pl}</div>
          </div>

          <div className="row">
            <div className="col-md-12">{props.q.pl}</div>
          </div>
        </div>
      </div>
      <div className="row p-3">
        <div className="col-md-12 bg-dark text-light">{props.q.pl}</div>
      </div>
    </>
  );
};

export default Question;
