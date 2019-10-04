import React, { Component } from "react";
import github from "../../assets/images/github.svg";
import linkedin from "../../assets/images/linkedin.svg";
import mail from "../../assets/images/mail.svg";
import $ from "jquery";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
class Footer extends Component {
  state = {};
  componentDidMount() {
    var date = new Date();
    if ($(document.body).height() < $(window).height()) {
      $(".footer--main").attr(
        "style",
        "position: fixed!important; bottom: 0px;"
      );
    }
  }

  render() {
    return (
      <>
        <div className="footer">
          <div className="footer--bg"></div>
          <div className="footer--main shadow-lg"></div>
          <div className="footer__content">
            <Row>
              {/* <Col> Copyright &copy; {date.getFullYear()}, Tam Lam</Col> */}
              <Col>
                <Image src={github}></Image>
                <Image src={linkedin}></Image>
                <Image src={mail}></Image>
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
