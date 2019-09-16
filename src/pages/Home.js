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
        <Container fluid="true"></Container>
      </React.Fragment>
    );
  }
}

export default Home;
