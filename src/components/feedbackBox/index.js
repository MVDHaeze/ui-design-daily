import React from "react";
import "./style.css";
import { HappyFace, SadFace, ThinkingFace } from "../../images/pictures/faces";
import ClosingX from "../../images/icons/closingX";

class FeedbackBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedbackSatisfaction: "",
      feedbackComment: "",
      userName: "",
    };
    this.handleComment = this.handleComment.bind(this);
    this.handleSatisfaction = this.handleSatisfaction.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleComment(event) {
    this.setState({ feedbackComment: event.target.value });
  }

  handleSatisfaction(event) {
    this.setState({
      feedbackSatisfaction: event.currentTarget.getAttribute(
        "data-satisfaction"
      ),
    });
  }

  handleSubmit() {
    // Should normaly log the information in DB on submit
  }

  handleSkip() {
    // Should normaly close the pop up
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
                  Hey {this.state.userName}! How likely are you to answer to this question?
                </h4>
              </div>
            </div>
            <div id="views-container" className="col stats-container">
              <div className="row space-around">
                {/* not very efficient --> rewrite with .map */}
                <div
                  className={
                    "low" === this.state.feedbackSatisfaction
                      ? "face-box-active"
                      : "face-box-inactive"
                  }
                  onClick={this.handleSatisfaction}
                  data-satisfaction="low"
                >
                  <SadFace />
                </div>
                <div
                  className={
                    "medium" === this.state.feedbackSatisfaction
                      ? "face-box-active"
                      : "face-box-inactive"
                  }
                  onClick={this.handleSatisfaction}
                  data-satisfaction="medium"
                >
                  <ThinkingFace />
                </div>
                <div
                  className={
                    "high" === this.state.feedbackSatisfaction
                      ? "face-box-active"
                      : "face-box-inactive"
                  }
                  onClick={this.handleSatisfaction}
                  data-satisfaction="high"
                >
                  <HappyFace />
                </div>
              </div>
            </div>
            <div>
              <label for="feedbackForm">
                <h5 className="darkblue">Tell us how we can improve</h5>
              </label>
              <textarea
                id="feedbackForm"
                name="feedbackForm"
                rows="3"
                placeholder="Write your message here"
                onChange={this.handleComment}
                value={this.state.feedbackComment}
              ></textarea>
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
