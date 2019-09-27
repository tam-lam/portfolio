import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Rellax from "rellax";
import CenteredTabs from "../TabPanel/TabPanel";
import Banner from "../Banner/Banner";

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
          {/* d-none d-md-block */}
          <div
            className="rellax object object--foreground shadow-lg "
            data-rellax-speed="-3"
          ></div>
          <Banner></Banner>
          <Container>
            <CenteredTabs className="shadow-lg"></CenteredTabs>
          </Container>
          {/* <div
            className="rellax objectHolder objectHolder--bottom"
            data-rellax-speed="-3"
          >
            <div className="object object--bottom shadown-lg "></div>
          </div> */}
        </Container>
      </React.Fragment>
    );
  }
}

export default Home;
