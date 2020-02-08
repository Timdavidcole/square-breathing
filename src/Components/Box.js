import React from "react";
import "../Styles/Box.css";
import Timer from "./Timer";
import Instructions from "./Instructions";


export default class Box extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pageLoaded: false
    };
  }
  
  render() {
    return (
      <div className="box-container">
        <div className="box-main"></div>
        <div className="box-white"></div>
        <Instructions/>
        <Timer/>
      </div>
    );
  }
}
