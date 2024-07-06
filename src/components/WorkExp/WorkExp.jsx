import React from "react";
import "../WorkExp/WorkExp.css";

const experiences = [
  {
    company: "Roomee",
    role: "Full Stack Developer",
    date: "October 2022 - Present",
    description: [
      "Front-End:",
      " - Developed dynamic and responsive user interfaces using React, Next.js and Flutter for mobile application.",
      " - Created backoffices with Next.js and Tailwind CSS for efficient content and user management.",
      " - Added features in applications for end customers, including subscription management and improving user experience.",
      "",
      "Back-End:",
      " - Designed and implemented microservices for a scalable backend architecture using Node.js and MongoDB.",
      " - Implemented inter-service communication with RabbitMQ to ensure reliability and scalability of systems.",
      " - Developed and maintained continuous deployment (CI/CD) pipelines to automate deployment processes and improve the efficiency of software deliveries.",
      " - Implemented RESTful APIs for communication between the front-end and back-end services.",
      " - Implemented authentication and authorization using JWT  for secure access to resources.",
      "",
      "Other Responsibilities:",
      " - Collaborated with cross-functional teams to define, design and deliver new features.",
      " - Optimizing application and database performance to ensure fast response times and high availability.",
      " - Active participation in code reviews and implementation of development best practices.",
    ],
  },
];

const WorkExperience = () => {
  return (
    <div className="work-experience">
      <h2>Work Experience</h2>
      {experiences.map((exp, index) => (
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

export default WorkExperience;
