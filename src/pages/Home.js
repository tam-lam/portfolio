import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../components/Navigation";
import Container from "react-bootstrap/Container";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar></NavBar>
        <Container className="mainBody nopadding" fluid="true">
          <div className="object object--foreground shadow-lg"></div>
          <Container className="banner" fluid="true">
            <div className="object object--background shadow-lg"></div>
            <div className="object object--midground shadow-lg"></div>
            <Container className="clipMask" fluid="true"></Container>
          </Container>
        </Container>
      </React.Fragment>
    );
  }
}

export default Home;
