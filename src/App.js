import React from "react";
import Box from "./Components/Box";
import "./Styles/App.css";

function App() {
  return (
    <div>
      <div style={{ width: "100%" }}>
        <div className="text-box">
          <span>
            Some people drink alcohol because it helps them relax. If you feel
            the need to relax, try square breathing instead.
          </span>
        </div>
      </div>
      <div className="text-box" style={{ top: "100px" }}>
        <span>
          Square breathing is a simple relaxation technique that promotes
          measured, mindful breathing. The idea is:
        </span>
        <ul>
          <li>Breathe in for a slow count of four</li>
          <li>Hold your breathe for a slow count of four</li>
          <li>Breathe out for a slow count of four</li>
          <li>Hold your breathe for a slow count of four</li>
          <li>Repeat at least four times</li>
        </ul>
      </div>
      <Box />
    </div>
  );
}

export default App;
