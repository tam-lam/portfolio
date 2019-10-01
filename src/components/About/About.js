import React, { Component } from "react";
import { TabTitle } from "../TabTitle/TabTitle";
import TypedText from "../TypedText/TypedText";
import Container from "react-bootstrap/Container";
import Fade from "react-reveal/Fade";

class About extends Component {
  state = {};
  render() {
    return (
      <>
        <TabTitle title="About" />
        <Fade right>
          <Container className="text-center">
            <p className="aboutText">
              Postgrad student, dev with a passion for Web and cross-platform
              developments.
            </p>
            <p>
              <TypedText />
            </p>
          </Container>
        </Fade>
      </>
    );
  }
}

export default About;
