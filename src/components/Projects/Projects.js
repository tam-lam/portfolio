import React, { Component } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import Fade from "react-reveal/Fade";
import ProjectData from "../../data/projects.json";
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

        {/* <ProjectCard></ProjectCard> */}
        {/* <ProjectCard></ProjectCard> */}
        <Fade right>
          {ProjectData.map((project, index) => {
            return <ProjectCard project={project}></ProjectCard>;
          })}
        </Fade>
      </React.Fragment>
    );
  }
}

export default Projects;
