import FeedbackBox from "./index";
import React from "react";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  shallow(<FeedbackBox />);
});
