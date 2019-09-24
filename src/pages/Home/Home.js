import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Rellax from "rellax";
import CenteredTabs from "../../components/TabPanel/TabPanel";
import Banner from "../../components/Banner/Banner";
class Home extends Component {
  state = {};
  componentDidMount() {
    var rellax = new Rellax(".rellax", {
      speed: 1,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });
  }
  render() {
    return (
      <React.Fragment>
        <Container className="mainBody nopadding" fluid="true">
          <div
            className="rellax object object--foreground shadow-lg"
            data-rellax-speed="-7"
          ></div>
          <Banner></Banner>
          <Container>
            <CenteredTabs className="shadow-lg"></CenteredTabs>
          </Container>
        </Container>
      </React.Fragment>
    );
  }
}

export default Home;
