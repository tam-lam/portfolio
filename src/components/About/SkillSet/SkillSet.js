import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { SkillCard } from "./SkillCard/SkillCard";
import html from "../../../assets/images/skill/colored/html5.svg";
import css from "../../../assets/images/skill/colored/css3.svg";
import sass from "../../../assets/images/skill/colored/sass.svg";
import javascript from "../../../assets/images/skill/colored/javascript.svg";
import react from "../../../assets/images/skill/colored/react.svg";
import nodejs from "../../../assets/images/skill/colored/nodejs.svg";
import python from "../../../assets/images/skill/colored/python.svg";
import java from "../../../assets/images/skill/colored/java.svg";
import swift from "../../../assets/images/skill/colored/swift.svg";

export const SkillSet = props => {
  return (
    <>
      <Container className="skillSet">
        <div className="text-left d-lg-none">
          {/* <h1 className=" text-left font-weight-bold">Skills</h1> */}
        </div>
        <div className="group">
          <Row className="shadow-lg">
            <Col>
              <SkillCard img={react} text="React JS, Redux" />
            </Col>
            {/* <Col>
              <SkillCard img={redux} text="Redux" />
            </Col> */}
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
            {/* <Col>
              <SkillCard img={php} text="PHP" />
            </Col> */}
          </Row>
        </div>
        <div className="group ">
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
