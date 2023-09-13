import React from "react";
import Profile from "./Profile";
import "./Container.css";
import Skills from "./Skills";
import { useState } from "react";

export default function Container() {
  const [currentMouse, setCurrentMouse] = useState({ x: 0, y: 0 });

  document.addEventListener("mousemove", (e) => {
    handleMouseOver(e);
  });

  function handleMouseOver(e) {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 40;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 40;
    setCurrentMouse({ x: xAxis, y: yAxis });
  }

  const rotateStyle = {
    transform: `rotateY(${currentMouse.x}deg) rotateX(${currentMouse.y}deg)`,
    transition: "transform ease 0.9s",
  };

  return (
    <div className="container">
      <div style={rotateStyle} className="holder">
        <Profile />
        <Skills />
      </div>
    </div>
  );
}
