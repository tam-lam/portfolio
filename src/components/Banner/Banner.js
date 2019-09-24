import React from "react";
import Container from "react-bootstrap/Container";

function Banner() {
  return (
    <Container className="banner" fluid="true">
      <Container>
        <h1 className="rellax banner__h1 shadown-lg" data-rellax-speed="-5">
          Hi,
          <br />
          I'm <span className="span--hightlight">Tam</span>,
          <br /> developer.
        </h1>
      </Container>

      <div
        className="rellax object object--background shadow-lg"
        data-rellax-speed="1"
      ></div>
      <div
        className="rellax object object--midground shadow-lg"
        data-rellax-speed="-3"
      ></div>
    </Container>
  );
}
export default Banner;
