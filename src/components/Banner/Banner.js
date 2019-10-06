import React from "react";
import Container from "react-bootstrap/Container";
import illustration from "../../assets/images/illustration.png";
function Banner() {
  return (
    <Container className="banner" fluid="true" id="banner">
      <Container className="banner__container">
        <h1 className="rellax banner__h1 shadown-lg" data-rellax-speed="-6">
          Hi,
          <br />
          I'm <span className="span--hightlight">Tam</span>,
          <br /> developer.
        </h1>
        <img
          alt="illustration"
          className=" d-md-none rellax illustration"
          data-rellax-speed="-2"
          src={illustration}
        />
        <img
          alt="illustration"
          className="d-none d-md-block rellax illustration"
          data-rellax-speed="3"
          src={illustration}
        />
      </Container>

      <div
        className="rellax object object--background shadow-lg"
        data-rellax-speed="2"
      ></div>
      <div
        className="rellax object object--midground shadow-lg"
        data-rellax-speed="-3"
      ></div>
    </Container>
  );
}
export default Banner;
