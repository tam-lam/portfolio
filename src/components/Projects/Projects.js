import React, { Component } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import Fade from "react-reveal/Fade";
import ProjectData from "../../data/projects.json";
import { Container } from "@material-ui/core";
class Projects extends Component {
  state = {};

  render() {
    var style = {
      position: "relative",
      zIndex: "100"
    };
    return (
      <React.Fragment>
        <h1
          className="rellax display-3 h1--bg font-weight-bold"
          data-rellax-speed="-1"
        >
          Projects
        </h1>
        <Fade style={style} right>
          {ProjectData.map(project => {
            return <ProjectCard project={project}></ProjectCard>;
          })}
        </Fade>

        <div className="objectHolder objectHolder--bottom">
          <div className="object object--bottom shadow-lg"></div>
        </div>
      </React.Fragment>
    );
  }
}

export default Projects;
