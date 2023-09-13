import React from "react";
import "../components/Project.css";
import github from "../github.png";

const Project = ({ item }) => {
  console.log(item);
  return (
    <div className="project">
      <div className="titleAndStack">
        <h4>{item.number}</h4>
        <div className="stack">
          {item.stack.map((item) => (
            <h6>{item}</h6>
          ))}
        </div>
      </div>
      <h2 className="title">{item.title}</h2>
      <p className="description">{item.description}</p>
      <div className="buttonDiv">
        <a href={item.github} target="_blank" rel="noopener noreferrer">
          <img className="ghlogo" src={github} alt="githubLogo" />
        </a>
        {item.url && (
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            <button className="projectButton">Live Project</button>
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;
