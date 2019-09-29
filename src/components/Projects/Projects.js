import React, { Component } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import Fade from "react-reveal/Fade";
import ProjectData from "../../data/projects.json";
import { TabTitle } from "../TabTitle/TabTitle";
class Projects extends Component {
  state = {};

  render() {
    var style = {
      position: "relative",
      zIndex: "100"
    };
    return (
      <>
        <TabTitle title="Projects" />
        <Fade style={style} right>
          {ProjectData.map((project, index) => {
            return <ProjectCard key={index} project={project}></ProjectCard>;
          })}
        </Fade>

        <div
          className="rellax objectHolder objectHolder--bottom"
          data-rellax-speed="3"
        >
          <div className="object object--bottom shadow-lg"></div>
        </div>
      </>
    );
  }
}

export default Projects;
