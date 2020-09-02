import React from "react";
import "./style.css";
import HappyFace from "../../images/pictures/happyFace";
import SadFace from "../../images/pictures/sadFace";
import ThinkingFace from "../../images/pictures/thinkingFace";
import ClosingX from "../../images/icons/closingX";

class FeedbackBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedbackLevel: "",
      feedbackComment: "",
    };
  }
  render() {
    return (
      <div className="card" id="card">
        <div className="container col" id="card-container">
          <div className="col box space-around">
            <div className="left-aligned">
              <ClosingX color="#A2A8BB" strokeWidth="2" />
            </div>
            <div className="col text-centered centered">
              <div className="title row text-centered w-80 centered">
                <h4 className="darkblue">
                  How likely are you to answer to this question?
                </h4>
              </div>
            </div>
            <div id="views-container" className="col stats-container">
              <h2>{this.state.postViews}</h2>
              <div className="row space-around">
                <div className="face-box">
                  <SadFace />
                </div>
                <div className="face-box">
                  <ThinkingFace />
                </div>
                <div className="face-box">
                  <HappyFace />
                </div>
              </div>
            </div>
            <div>
              <label for="feedbackForm">
                <h5 className="darkblue">Tell us how we can improve</h5>
              </label>
              <textarea id="feedbackForm" name="feedbackForm" rows="3">
                Write your message here
              </textarea>
            </div>
            <div className="row space-around">
              <button className="secondary-button">
                <div className="row ">
                  <h4 className="text-centered"> Skip </h4>
                </div>
              </button>
              <button className="primary-button">
                <div className="row ">
                  <h4 className="text-centered"> Submit </h4>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FeedbackBox;
