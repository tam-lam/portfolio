import React, { Component } from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import Fade from "react-reveal/Fade";
import ProjectData from "../../data/projects.json";
import { TabTitle } from "../TabTitle/TabTitle";
import { ScrollUpButton } from "../ScrollUpButton/ScrollUpButton";
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
          className="rellax shapeHolder shapeHolder--bottom"
          data-rellax-speed="3"
        >
          <div className="shape--bottom shadow-lg" />
        </div>
        <div
          className="rellax shape--bottomCircle shadow-lg"
          data-rellax-speed="9"
        ></div>
        <ScrollUpButton />
      </>
    );
  }
}

export default Projects;
