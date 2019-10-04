import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { TabTitle } from "../TabTitle/TabTitle";
import ContactData from "../../data/contacts.json";
class Contact extends Component {
  state = {};
  render() {
    return (
      <>
        <TabTitle title="Contact" />
        <div className="contactLinks">
          <Row>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={ContactData.github}
            >
              Github
            </a>
          </Row>
          <Row>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={ContactData.resume}
            >
              Resume
            </a>
          </Row>
          <Row>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={ContactData.linkedin}
            >
              Linkedin
            </a>
          </Row>
          <Row>
            <a href={"mailto:" + ContactData.email}>Email</a>
          </Row>
        </div>
      </>
    );
  }
}

export default Contact;
