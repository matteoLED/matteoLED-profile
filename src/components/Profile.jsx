import React from "react";
import "./Profile.css";
import Photo from "../Headshot.png";

export default function Profile() {
  return (
    <div className="profile">
      <div className="leftDiv">
        <div className="innerDiv">
          <h6 className="monotype">Hi, my name is</h6>
          <h1 className="name">Matteo LEDEE.</h1>
          <h1 className="slogan">I build for the web.</h1>
          <p className="expertise">
            I’m a full stack developer specializing in web and mobile
            development. Passionate about building modular, scalable and web
            experiences.
          </p>
          <div className="buttons">
            <a
              href="https://www.linkedin.com/in/matteo-ledee/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button">LinkedIn</button>
            </a>
            <a
              href="https://github.com/matteoLED"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button">Github</button>
            </a>
            <a
              href="https://soapy-attention-ce1.notion.site/Matteo-LEDEE-820e50d0be5b4f518d89f5d8bce9b0d7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button">Resume</button>
            </a>
            <a
              href="https://bento.me/mat-led"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button">Bento</button>
            </a>
          </div>
        </div>
      </div>
      <div className="rightDiv">
        <img src={Photo} alt="headshot" className="headshot" />
      </div>
    </div>
  );
}
