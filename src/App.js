import React from "react";
import Box from "./Components/Box";
import "./Styles/App.css";

function App() {
  return (
    <div>
      <div className="text-box-container">
        <div>
          <div className="text-box1">
            <span>
              Some people drink alcohol because it helps them relax. If you feel
              the need to relax, try{" "}
              <span style={{ color: "#fae200" }}>square breathing</span>{" "}
              instead.
            </span>
          </div>
        </div>
        <div className="text-box2" style={{ top: "100px" }}>
          <span>
            Square breathing is a simple relaxation technique that promotes
            measured, mindful breathing. The idea is:
          </span>
          <ul>
            <li>
              <span style={{ color: "#fae200" }}>Breathe in</span> for a slow
              count of four
            </li>
            <li>
              <span style={{ color: "#fae200" }}>Hold</span> your breath for a
              slow count of four
            </li>
            <li>
              <span style={{ color: "#fae200" }}>Breathe out</span> for a slow
              count of four
            </li>
            <li>
              <span style={{ color: "#fae200" }}>Hold</span> your breath for a
              slow count of four
            </li>
            <li>
              <span style={{ color: "#fae200" }}>Repeat</span> at least four
              times
            </li>
          </ul>
        </div>
      </div>
      <Box />
    </div>
  );
}

export default App;
