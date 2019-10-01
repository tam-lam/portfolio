import React, { Component } from "react";
import { TabTitle } from "../TabTitle/TabTitle";
import TypedText from "../TypedText/TypedText";
class About extends Component {
  state = {};
  render() {
    return (
      <>
        <TabTitle title="About" />
        <TypedText />
      </>
    );
  }
}

export default About;
