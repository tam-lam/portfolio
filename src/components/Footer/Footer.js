import React, { Component } from "react";
import github from "../../assets/images/github.svg";
import linkedin from "../../assets/images/linkedin.svg";
import resume from "../../assets/images/resume.svg";
import email from "../../assets/images/mail.svg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ContactData from "../../data/contacts.json";
class Footer extends Component {
  state = {};

  render() {
    return (
      <>
        <div className="footer">
          <div className="footer--bg"></div>
          <div className="footer--main shadow-lg"></div>
          <div className="footer__content">
            <Row>
              <Col>
                <a
                  href={ContactData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={github} />
                </a>
                <a
                  href={ContactData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={linkedin} />
                </a>
                <a
                  href={ContactData.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={resume} />
                </a>
                <a href={"mailto:" + ContactData.email}>
                  <Image src={email} />
                </a>
              </Col>
            </Row>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
// export const Footer = props => {};
