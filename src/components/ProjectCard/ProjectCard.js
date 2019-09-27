import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import carSharing from "../../assets/images/carSharing.png";
import time from "../../assets/images/time.png";
import lazymachine from "../../assets/images/lazymachine.png";
import portfolio from "../../assets/images/portfolio.png";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import gitIcon from "../../assets/images/github.png";
import liveIcon from "../../assets/images/live.png";
import * as Constants from "../../constants/constants";

class ProjectCard extends Component {
  state = {};
  getPreviewImg = imgName => {
    switch (imgName) {
      case Constants.PORTFOLIO:
        return portfolio;
      case Constants.CAR_SHARING:
        return carSharing;
      case Constants.TIME:
        return time;
      case Constants.LAZY_MACHINE:
        return lazymachine;
      default:
        return carSharing;
    }
  };
  renderTechnical(techList) {
    let list = [];
    techList.forEach(element => {
      list.push(<li>{element}</li>);
    });
    return list;
  }

  renderFeature(project) {
    if (project.hasOwnProperty("features")) {
      var featureList = project.features;
      let paragraphs = [];
      featureList.forEach(element => {
        paragraphs.push(<p>{element}</p>);
      });
      return (
        <React.Fragment>
          <h3 className="h3--overview">_Features:</h3>
          <Container className="features">{paragraphs}</Container>
        </React.Fragment>
      );
    }
  }

  getCustomCardClassName(id) {
    var className = "project shadow-sm ";
    className += id == Constants.FIRST_PROJECT_ID ? "project--leftTopCut" : "";
    className +=
      id == Constants.LAST_PROJECT_ID ? "project--leftBottomCut" : "";
    return className;
  }
  render() {
    const project = this.props.project;
    var previewImage = this.getPreviewImg(project.image);
    console.log(project.hasOwnProperty("features"));
    return (
      <React.Fragment>
        <Container
          fuild="true"
          className={this.getCustomCardClassName(project.id)}
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
                      <a target="_blank" href={project.github}>
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
                {this.renderFeature(project)}
              </Container>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
export default ProjectCard;
