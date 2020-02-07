import React from "react";
import "../Styles/Box.css";
import Timer from "./Timer";


export default class Box extends React.Component {
  render() {
    return (
      <div className="box-container">
        <div className="box-main"></div>
        <div className="box-white"></div>
        <Timer/>
      </div>
    );
  }
}
