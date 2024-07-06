import React from "react";
import projects from "../projects.json";
import Project from "./Project";
import "../components/ProjectContainer.css";

const ProjectContainer = () => {
  return (
    <>
      <div className="projectContainer">
        <h2 className="notable">Some fun projects...</h2>
        {projects.projects.map((item) => (
          <Project item={item} />
        ))}
      </div>
      <a
        style={{ textDecoration: "none" }}
        href="mailto:matteoledee.pro@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <h6
          style={{
            color: "#f5f5f5",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          matteoledee.pro@gmail.com
        </h6>
      </a>
    </>
  );
};

export default ProjectContainer;
