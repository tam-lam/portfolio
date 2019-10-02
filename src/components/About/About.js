import React, { Component } from "react";
import { TabTitle } from "../TabTitle/TabTitle";
import TypedText from "../TypedText/TypedText";
import Container from "react-bootstrap/Container";
import Fade from "react-reveal/Fade";
import { CharacterCard } from "./CharacterCard/CharacterCard";
import { TimeLine } from "./TimeLine/TimeLine";

import CharacterData from "../../data/characters.json";
class About extends Component {
  state = {};
  render() {
    return (
      <>
        <TabTitle title="About" />
        <Fade right>
          <Container className="text-center">
            <p className=" aboutText">
              Postgrad student, dev with a passion for Web and cross-platform
              developments.
            </p>
            <p>
              <TypedText />
            </p>
            <div className="container--centered">
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
            </div>
          </Container>
        </Fade>
      </>
    );
  }
}

export default About;
