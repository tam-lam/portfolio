import React, { Component } from "react";
import { TabTitle } from "../TabTitle/TabTitle";
import TypedText from "../TypedText/TypedText";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
          <div className=" characterHolder">
            <div className="character">
              <div className="character__card">
                <h1>Title</h1>
                <p>This is an article</p>
              </div>
              <div className="character__card">
                <h1>Title</h1>
                <p>This is an article</p>
              </div>
              <div className="character__card">
                <h1>Title</h1>
                <p>This is an article</p>
              </div>
              <div className="character__card">
                <h1>Title</h1>
                <p>This is an article</p>
              </div>
            </div>
          </div>
        </Fade>
      </>
    );
  }
}

export default About;
