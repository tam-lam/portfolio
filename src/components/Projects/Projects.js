import React, { Component } from "react";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import Fade from "react-reveal/Fade";

class Projects extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1
          className="rellax display-3 h1--bg font-weight-bold"
          data-rellax-speed="-1"
        >
          Projects
        </h1>
        <Fade right>
          <ProjectCard></ProjectCard>
          <ProjectCard></ProjectCard>
        </Fade>
      </React.Fragment>
    );
  }
}

export default Projects;
