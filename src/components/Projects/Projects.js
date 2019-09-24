import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import carSharing from "../../assets/images/carSharing.png";
import time from "../../assets/images/time.png";
import lazymachine from "../../assets/images/lazymachine.png";
import Card from "react-bootstrap/Card";

class Projects extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1
          className="rellax display-3 h1--bg font-weight-bold"
          data-rellax-speed="-1"
        >
          Projects
        </h1>
        <Container
          fuild="true"
          className="project project--leftTopCut shadow-sm"
        >
          <Card className="project__card " style={{ width: "18rem" }}>
            <h1 className="project__title">_Car sharing app</h1>

            <Card.Img variant="top" src={carSharing} />
            <Card.Body>
              <Card.Title>Technologies used</Card.Title>
              <span
                class="glyphicon glyphicon-star"
                aria-hidden="true"
              ></span>{" "}
              Star
              <Card.Text>awffa</Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </React.Fragment>
    );
  }
}

export default Projects;
