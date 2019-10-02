import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { SkillCard } from "./SkillCard/SkillCard";
import html from "../../../assets/images/skill/html5.svg";
import css from "../../../assets/images/skill/css3.png";
import sass from "../../../assets/images/skill/sass.svg";
import javascript from "../../../assets/images/skill/javascript.png";
import react from "../../../assets/images/skill/react.svg";
import redux from "../../../assets/images/skill/redux.svg";
import php from "../../../assets/images/skill/php.svg";
import nodejs from "../../../assets/images/skill/nodejs.png";
import python from "../../../assets/images/skill/python.png";
import java from "../../../assets/images/skill/java.svg";
import swift from "../../../assets/images/skill/swift.png";

export const SkillSet = props => {
  return (
    <>
      <Container className="skillSet">
        <div className="group">
          <h3>Web Developement</h3>
          <Row className="shadow-lg">
            <Col>
              <SkillCard img={react} text="React JS" />
            </Col>
            <Col>
              <SkillCard img={redux} text="Redux" />
            </Col>
            <Col>
              <SkillCard img={nodejs} text="Node JS" />
            </Col>
            <Col>
              <SkillCard img={html} text="HTML" />
            </Col>
            <Col>
              <SkillCard img={css} text="CSS" />
            </Col>
            <Col>
              <SkillCard img={sass} text="SASS" />
            </Col>
            <Col>
              <SkillCard img={javascript} text="Javascript" />
            </Col>
            <Col>
              <SkillCard img={php} text="PHP" />
            </Col>
          </Row>
        </div>
        <div className="group ">
          <h3 className="display-5">Others</h3>
          <Row className="shadow-lg">
            <Col>
              <SkillCard img={python} text="Python" />
            </Col>
            <Col>
              <SkillCard img={swift} text="Swift" />
            </Col>

            <Col>
              <SkillCard img={java} text="Java" />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};
