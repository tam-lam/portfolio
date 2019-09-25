import React from "react";
import Container from "react-bootstrap/Container";
import carSharing from "../../assets/images/carSharing.png";
import time from "../../assets/images/time.png";
import lazymachine from "../../assets/images/lazymachine.png";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export const ProjectCard = params => {
  return (
    <React.Fragment>
      <Container fuild="true" className="project project--leftTopCut shadow-sm">
        <Row noGutters="true">
          <Col sm={4}>
            <Card className="project__card ">
              <h1 className="project__title">_Car sharing app</h1>

              <Card.Img variant="top" src={carSharing} />
              <Card.Body></Card.Body>
            </Card>
          </Col>
          <Col sm={8}>
            <Container fuild="true" className="project__overview shadow-lg ">
              <h3 className="h3--overview">_Overview</h3>
              <p>
                Ea dolore ullamco cillum elit adipisicing aute sint cillum
                cillum exercitation ut. Dolore nulla dolore do irure Lorem. Ut
                in ad aliqua aute dolore officia sunt. Esse nulla ex
                reprehenderit incididunt Lorem.
              </p>
              <h3 className="h3--overview">_Development:</h3>
              <Row>
                <Col>
                  <ul>
                    <li>React JS, Redux</li>
                    <li>Node JS, Express</li>
                    <li>Jest</li>
                  </ul>
                </Col>
                <Col>
                  <ul>
                    <li>SCRUM development</li>
                    <li>Team of 4</li>
                  </ul>
                </Col>
              </Row>
              <h3 className="h3--overview">_Features:</h3>
              <ul>
                <li>Secure authentication/registration</li>
                <li>Working with Google Geolocation APIs</li>
                <li>User distance calculation and services</li>
                <li>PayPal sandbox transactions support</li>
              </ul>
            </Container>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
