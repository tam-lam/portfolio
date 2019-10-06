import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Rellax from "rellax";
import CenteredTabs from "../TabPanel/TabPanel";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
class Home extends Component {
  state = {};
  componentDidMount() {
    var rellax = new Rellax(".rellax", {
      speed: 2,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });
  }
  render() {
    return (
      <>
        <Container className="mainBody nopadding" fluid="true">
          <div
            className=" d-md-none rellax object object--foreground shadow-lg "
            data-rellax-speed="-1"
          ></div>
          <div
            className="d-none d-md-block rellax object object--foreground shadow-lg "
            data-rellax-speed="-3"
          ></div>
          <Banner />
          <Container>
            <CenteredTabs className="shadow-lg"></CenteredTabs>
          </Container>

          <Footer />
        </Container>
      </>
    );
  }
}

export default Home;
