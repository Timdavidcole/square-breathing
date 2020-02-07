import React from "react";
import Timer from "./Components/Timer";
import './App.css';

function App() {
  return (
    <div>
      <h1>
        Some people drink alcohol because it helps them relax. If you feel the
        need to relax, try square breathing instead.
      </h1>
      <Timer />
      <h3>
        Square breathing is a simple relaxation technique that promotes
        measured, mindful breathing. The idea is:
      </h3>
      <ul>
        <li>Breathe in for a slow count of four</li>
        <li>Hold your breathe for a slow count of four</li>
        <li>Breathe out for a slow count of four</li>
        <li>Hold your breathe for a slow count of four</li>
        <li>Repeat at least four times</li>
      </ul>
    </div>
  );
}

export default App;
