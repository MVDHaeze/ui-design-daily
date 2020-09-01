import React from "react";
import "./socialStatsCard.css";
import ArrowRight from "../../images/icons/arrowRight";
import Eye from "../../images/icons/eye";
import MessageSquare from "../../images/icons/messageSquare";
import ThumbsUp from "../../images/icons/thumbsUp";

class SocialStatsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postViews: "2,318,589",
      postLikes: "29,272",
      postComments: "904",
    };
  }
  render() {
    return (
      <div className="card" id="card">
        <div className="container col" id="card-container">
          <div className="col box space-around">
            <div className="title row">
              <h1>All time received</h1>
            </div>
            <div id="views-container" className="col stats-container">
              <h2>{this.state.postViews}</h2>
              <div className="row">
                <div className="icon">
                  <Eye size="24px" color="#000" strokeWidth="2" />
                </div>
                <h4>Post views </h4>
              </div>
            </div>
            <div>
              <hr />
            </div>
            <div>
              <div className="row space-around mb-50">
                <div id="likes-container" className="col stats-container">
                  <h3>{this.state.postLikes}</h3>
                  <div className="row centered">
                    <div className="icon">
                      <ThumbsUp size="24px" color="#000" strokeWidth="2" />
                    </div>
                    <h4>Likes </h4>
                  </div>
                </div>
                <div id="comments-container" className="col stats-container">
                  <h3>{this.state.postComments}</h3>
                  <div className="row">
                    <div className="icon">
                      <MessageSquare size="24px" color="#000" strokeWidth="2" />
                    </div>
                    <h4>Comments</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button>
            <div className="row">
              <h4> View more details </h4>
              <div className="icon">
                <ArrowRight size="24px" color="#000" strokeWidth="2" />
              </div>
            </div>
          </button>
        </div>
      </div>
    );
  }
}

export default SocialStatsCard;
