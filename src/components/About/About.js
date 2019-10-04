import React, { Component } from "react";
import { TabTitle } from "../TabTitle/TabTitle";
import TypedText from "./TypedText/TypedText";
import Fade from "react-reveal/Fade";
import { CharacterCard } from "./CharacterCard/CharacterCard";
import { TimeLine } from "./TimeLine/TimeLine";
import CharacterData from "../../data/characters.json";
import { SkillSet } from "./SkillSet/SkillSet";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Hobbies } from "./Hobbies/Hobbies";
class About extends Component {
  state = {};
  render() {
    return (
      <>
        <TabTitle title="About" />
        <Fade right>
          <div className="container--centered">
            <div className="aboutText">
              <p className="aboutText__text">
                Developer, postgrad student with a passion for Web and
                cross-platform developments.
              </p>
            </div>
            <p>
              <TypedText />
            </p>
            <div className="character">
              {CharacterData.map((character, index) => {
                return (
                  <CharacterCard
                    key={index}
                    hightlight={character.hightlight}
                    description={character.description}
                  />
                );
              })}
            </div>

            <TimeLine></TimeLine>
            <Row>
              <Col className="d-none d-md-block" md={4}>
                <TabTitle title="Skills" />
              </Col>
              <Col md={8}>
                <SkillSet />
              </Col>
            </Row>
            <Row>
              <Col md={8}>
                <Hobbies />
              </Col>
              <Col className="d-none d-md-block" md={4}>
                <TabTitle title="Digital arts" />
              </Col>
            </Row>
            {/* <Hobbies /> */}
          </div>
        </Fade>
      </>
    );
  }
}

export default About;
