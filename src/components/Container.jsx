import React, { useState, useEffect } from "react";
import Profile from "./Profile";
import "./Container.css";
import Skills from "./Skills";

export default function Container() {
  const [currentMouse, setCurrentMouse] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const handleMouseMove = (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 40;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 40;
        setCurrentMouse({ x: xAxis, y: yAxis });
      };

      document.addEventListener("mousemove", handleMouseMove);

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [isMobile]);

  const rotateStyle = isMobile
    ? {}
    : {
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
