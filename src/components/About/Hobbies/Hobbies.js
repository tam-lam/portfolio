import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import forest from "../../../assets/images/hobbies/forest.jpg";
import destiny from "../../../assets/images/hobbies/destiny.jpg";
import sky from "../../../assets/images/hobbies/sky.jpg";
import city from "../../../assets/images/hobbies/city.jpg";
import Fade from "react-reveal/Fade";

export const Hobbies = props => {
  return (
    <>
      <div className="hobbies">
        <div className="hobbiesText">
          <p className="hobbiesText__text">
            I love to make digital arts and exploring the outdoor
          </p>
        </div>
        <Fade>
          <Row>
            <Col className="imgHolder" xs={6} sm={6}>
              <Image className="artImg shadow-lg" src={sky} />
            </Col>
            <Col className="imgHolder" xs={6} sm={6}>
              <Image className="artImg shadow-lg" src={city} />
            </Col>
            <Col className="imgHolder" xs={6} sm={6}>
              <Image className="artImg shadow-lg" src={destiny} />
            </Col>
            <Col className="imgHolder" xs={6} sm={6}>
              <Image className="artImg shadow-lg" src={forest} />
            </Col>
          </Row>
        </Fade>
      </div>
    </>
  );
};
