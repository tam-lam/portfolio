import React from "react";
import Container from "react-bootstrap/Container";
import carSharing from "../../assets/images/carSharing.png";
import time from "../../assets/images/time.png";
import lazymachine from "../../assets/images/lazymachine.png";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import gitIcon from "../../assets/images/github.png";
import liveIcon from "../../assets/images/live.png";

const getPreviewImg = imgName => {
  switch (imgName) {
    case "carSharing":
      return carSharing;
    case "time":
      return time;
    case "lazymachine":
      return lazymachine;
    default:
      return carSharing;
  }
};

export const ProjectCard = props => {
  const project = props.project;
  var previewImage = getPreviewImg(project.image);
  var technicalCols = chunkArray(project.technical, 2);
  //Getting technical li
  return (
    <React.Fragment>
      <Container fuild="true" className="project project--leftTopCut shadow-sm">
        <Row noGutters="true">
          <Col md={4}>
            <Card className="project__card ">
              <h1 className="project__title">{project.name}</h1>

              <Card.Img variant="top" src={previewImage} />
              <Card.Body>
                <Row className="links ">
                  {project.livePreview !== "" && (
                    <Col className="text-center">
                      <a href={project.livePreview} target="_blank">
                        <Image className="glyph" src={liveIcon} />
                        Live Preview
                      </a>
                    </Col>
                  )}
                  <Col className="text-center">
                    <a href={project.github}>
                      <Image className="glyph" src={gitIcon} fluid />
                      View Source
                    </a>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md={8}>
            <Container fuild="true" className="project__overview shadow-lg ">
              <h3 className="h3--overview">_Overview</h3>
              <p>{project.overview}</p>
              <h3 className="h3--overview">_Technical:</h3>
              <Container className="technical">
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
              </Container>

              <h3 className="h3--overview">_Features:</h3>
              <Container className="features">
                <p>Secure authentication/registration</p>
                <p>Working with Google Geolocation APIs</p>
                <p>User distance calculation and services</p>
                <p>PayPal sandbox transactions support</p>
              </Container>
            </Container>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
function chunkArray(myArray, chunk_size) {
  var index = 0;
  var arrayLength = myArray.length;
  var tempArray = [];

  for (index = 0; index < arrayLength; index += chunk_size) {
    var myChunk = myArray.slice(index, index + chunk_size);
    tempArray.push(myChunk);
  }

  return tempArray;
}
