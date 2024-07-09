import React from "react";
import "../Education/Education.css";

const education = [
  {
    company: "Hetic",
    role: "Bachelor Developer Web",
    date: "October 2023 - Present",
    description: [],
  },
];

const Education = () => {
  return (
    <div className="education-exp">
      <h2>Education</h2>
      {education.map((exp, index) => (
        <div key={index} className="experience">
          <h3>{exp.company}</h3>
          <h4>{exp.role}</h4>
          <p className="date">{exp.date}</p>
          {exp.description.map((desc, i) => (
            <li key={i}>{desc}</li>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Education;
