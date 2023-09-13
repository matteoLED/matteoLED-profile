import React from "react";
import "./App.css";
import Container from "./components/Container";
import ProjectContainer from "./components/ProjectContainer";

function App() {
  return (
    <div className="App">
      <Container />
      <ProjectContainer />

        <h6 style={{ color: "#f5f5f5", marginBottom: "40px" }}>currently developper full stack at<a
            style={{ fontWeight: "bold", textDecoration: "none", color: "rgba(0, 0, 0, 0.492)" }}
            href="https://www.roomee.io/"
            target="_blank" rel="noreferrer"
        > roomee.io</a></h6>

        
    </div>
  );
}

export default App;
