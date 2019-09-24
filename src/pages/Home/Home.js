import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Rellax from "rellax";
import CenteredTabs from "../../components/TabPanel/TabPanel";
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
        {/* <NavBar></NavBar> */}
        <Container className="mainBody nopadding" fluid="true">
          <div
            className="rellax object object--foreground shadow-lg"
            data-rellax-speed="-7"
          ></div>
          <Container className="banner" fluid="true">
            <h1 className="rellax banner__h1 shadown-lg" data-rellax-speed="-5">
              Hi,
              <br />
              I'm <span className="span--hightlight">Tam</span>,
              <br /> developer.
            </h1>
            <div
              className="rellax object object--background shadow-lg"
              data-rellax-speed="1"
            ></div>
            <div
              className="rellax object object--midground shadow-lg"
              data-rellax-speed="-3"
            ></div>
          </Container>
          <Container>
            <CenteredTabs></CenteredTabs>
          </Container>
        </Container>
      </React.Fragment>
    );
  }
}

export default Home;
