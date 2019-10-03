import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import forest from "../../../assets/images/hobbies/forest.jpg";
import destiny from "../../../assets/images/hobbies/destiny.jpg";
import sky from "../../../assets/images/hobbies/sky.jpg";
import city from "../../../assets/images/hobbies/city.jpg";

export const Hobbies = props => {
  return (
    <>
      <div className="hobbies">
        <Row>
          <Col className="imgHolder" sm={6}>
            <Image src={sky} />
          </Col>
          <Col className="imgHolder" sm={6}>
            <Image src={city} />
          </Col>
          <Col className="imgHolder" sm={6}>
            <Image src={destiny} />
          </Col>
          <Col className="imgHolder" sm={6}>
            <Image src={forest} />
          </Col>
        </Row>
      </div>
    </>
  );
};
