import React, { Component } from "react";
import Work01 from "./workExamples/Work01";
import Work02 from "./workExamples/Work03";
import Work03 from "./workExamples/Work02";

class Work extends Component {
  state = {
    closeModal: this.props.closeModal
  };
  render() {
    const { example, closeModal } = this.props;

    switch (example) {
      case "example01":
        return <Work01 closeModal={closeModal} />;
      case "example02":
        return <Work02 closeModal={closeModal} />;
      case "example03":
        return <Work03 closeModal={closeModal} />;
      default:
        break;
    }
  }
}

export default Work;
