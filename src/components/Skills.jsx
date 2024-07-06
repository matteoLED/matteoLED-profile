import React from "react";
import "./Skills.css";
import allSkills from "../skills.json";

export default function Skills() {
  return (
    <div className="skills">
      <div className="skillList">
        <h6 className="type">Proficient</h6>
        <div className="skillContainer">
          {allSkills.proficient.map((item) => (
            <h6 key={item}>{item}</h6>
          ))}
        </div>
      </div>
      <div className="skillList">
        <h6 className="type">Experience</h6>
        <div className="skillContainer">
          {allSkills.experience.map((item) => (
            <h6 key={item}>{item}</h6>
          ))}
        </div>
      </div>
      <div className="skillList">
        <h6 className="type">Perfect Stack</h6>
        <div className="skillContainer">
          {allSkills.perfect_stack.map((item) => (
            <h6 key={item}>{item}</h6>
          ))}
        </div>
      </div>
      <div className="skillList">
        <h6 className="type">Bonus</h6>
        <div className="skillContainer">
          {allSkills.bonus.map((item) => (
            <h6 key={item}>{item}</h6>
          ))}
        </div>
      </div>
    </div>
  );
}
