import React, { Component } from "react";
import QuestionsArray from "assets/QuestionsArray";
import Question from "components/Question/Question";

class Questions extends Component {
  state = {
    qArr: [...QuestionsArray],
    qPerPage: 1,
    index: 0
  };

  render() {
    const { index, qPerPage } = this.state;
    const a = () => index;
    const b = () => index + qPerPage;

    return (
      <div className="container-fluid">
        {this.state.qArr.slice(a(), b()).map(q => (
          <Question q={q} key={q.id} />
        ))}
      </div>
    );
  }
}

export default Questions;
