import React, { Component } from "react";
import { TabTitle } from "../TabTitle/TabTitle";
import TypedText from "../TypedText/TypedText";
class About extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <TabTitle title="About" />
        <TypedText />
      </React.Fragment>
    );
  }
}

export default About;
