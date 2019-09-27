import React from "react";
import { Link } from "react-scroll";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import upArrow from "../../assets/images/upArrow.png";
import Container from "react-bootstrap/Container";

export const ScrollUpButton = params => {
  return (
    <Container className="text-center">
      <Button bsPrefix="scrollUpBtn shadow">
        <Image src={upArrow} style={{ opacity: 0.7 }} className="glyph"></Image>
        <Link
          activeClass="active"
          to="banner"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          {" "}
          Back to top
        </Link>
      </Button>
    </Container>
  );
};
