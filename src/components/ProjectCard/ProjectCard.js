import React, { Component } from "react";
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

class ProjectCard extends Component {
  state = {};
  renderTechnical(techList) {
    let list = [];
    techList.forEach(element => {
      list.push(<li>{element}</li>);
    });
    return list;
  }
  renderFeatures(featureList) {
    let paragraphs = [];
    featureList.forEach(element => {
      paragraphs.push(<p>{element}</p>);
    });
    return paragraphs;
  }
  render() {
    const project = this.props.project;
    var previewImage = getPreviewImg(project.image);
    return (
      <React.Fragment>
        <Container
          fuild="true"
          className="project project--leftTopCut shadow-sm"
        >
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
                  <ul>{this.renderTechnical(project.technical)}</ul>
                </Container>

                <h3 className="h3--overview">_Features:</h3>
                <Container className="features">
                  {this.renderFeatures(project.features)}
                </Container>
              </Container>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
export default ProjectCard;
