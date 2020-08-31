import React from "react";
import "./socialStatsCard.css";
import { ArrowRight } from "../../images/icons";

class SocialStatsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postViews: "2318589",
      postLikes: "29272",
      postComments: "904",
    };
  }
  render() {
    return (
      <div className="card" id="card">
        <div className="container">
          <button>
            <div> View more details </div>
            <ArrowRight size="24px" color="#000" strokeWidth="2" />
          </button>
        </div>
      </div>
    );
  }
}

export default SocialStatsCard;
