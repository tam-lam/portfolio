import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import carSharing from "../../../assets/images/carSharing.png";
import time from "../../../assets/images/time.png";
import lazymachine from "../../../assets/images/lazymachine.png";
import portfolio from "../../../assets/images/portfolio.png";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import gitIcon from "../../../assets/images/github.png";
import liveIcon from "../../../assets/images/live.png";
import * as Constants from "../../../constants/constants";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

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
    techList.forEach((element, index) => {
      list.push(<li key={index}>{element}</li>);
    });
    return list;
  }

  renderFeature(project) {
    if (project.hasOwnProperty("features")) {
      var featureList = project.features;
      let paragraphs = [];
      featureList.forEach((element, index) => {
        paragraphs.push(<p key={index}>{element}</p>);
      });
      return (
        <>
          <h3 className="h3--overview">Features:</h3>
          <Container className="features">{paragraphs}</Container>
        </>
      );
    }
  }

  getCustomCardClassName(id) {
    // var className = "project shadow-lg ";
    switch (id) {
      case Constants.FIRST_PROJECT_ID:
        return "project shadow-sm project--leftTopCut";
      case Constants.LAST_PROJECT_ID:
        return "project shadow-sm project--leftBottomCut";
      default:
        return "project shadow-lg";
    }
  }
  renderViewSource(project) {
    const popover = (
      <Popover id="popover-basic">
        <Popover.Content>Please contact for source code</Popover.Content>
      </Popover>
    );
    if (project.image === Constants.PORTFOLIO) {
      return (
        <OverlayTrigger trigger="click" placement="top" overlay={popover}>
          <Col className="text-center">
            <div>
              <Image className="glyph" src={gitIcon} fluid />
              View Source
            </div>
          </Col>
        </OverlayTrigger>
      );
    } else {
      return (
        <Col className="text-center">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Image className="glyph" src={gitIcon} fluid />
            View Source
          </a>
        </Col>
      );
    }
  }
  render() {
    const project = this.props.project;
    var previewImage = this.getPreviewImg(project.image);
    return (
      <>
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
                    {project.hasOwnProperty("livePreview") && (
                      <Col className="text-center">
                        <a
                          href={project.livePreview}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image className="glyph" src={liveIcon} />
                          View App
                        </a>
                      </Col>
                    )}
                    {this.renderViewSource(project)}
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col md={8}>
              <Container fuild="true" className="project__overview shadow-lg ">
                <h3 className="h3--overview">Overview</h3>
                <p>{project.overview}</p>
                <h3 className="h3--overview">Technical:</h3>
                <Container className="technical">
                  <ul>{this.renderTechnical(project.technical)}</ul>
                </Container>
                {this.renderFeature(project)}
              </Container>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default ProjectCard;
