import React, { useState, useEffect } from "react";
import projects from "../projects.json";
import Project from "./Project";
import "../components/ProjectContainer.css";
import WorkExperience from "./WorkExp/WorkExp";
import Education from "./Education/Education";

const ProjectContainer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="projectContainer">
        <h2 className="notable">Some fun projects...</h2>
        {projects.projects.map((item, index) => (
          <Project item={item} key={item.id || index} />
        ))}
      </div>
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          ↑
        </button>
      )}
      <Education />
      <WorkExperience />

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
