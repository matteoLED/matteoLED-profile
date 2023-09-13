import React from "react";
import projects from "../projects.json";
import Project from "./Project";
import "../components/ProjectContainer.css";

const ProjectContainer = () => {
  return (
    <div className="projectContainer">
      <h2 className="notable">Some fun projects...</h2>
      {projects.projects.map((item) => (
        <Project item={item} />
      ))}
      <a
        style={{ textDecoration: "none" }}
        href="mailto:matteoledee.pro@gmail.com"
        target="_blank"
      >
        <h6 style={{ color: "#f5f5f5" }}>matteoledee.pro@gmail.com</h6>
      </a>
      {/* <h6 style={{ color: "#f5f5f5" }}>currently working as developper full stack at roomee.io </h6> */}
    </div>
  );
};

export default ProjectContainer;
