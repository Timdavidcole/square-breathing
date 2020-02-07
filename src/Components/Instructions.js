import React from "react";
import "../Styles/Instructions.css";

export default class Instructions extends React.Component {
  state = {
    seconds: 4
  };

  componentDidMount() {
    this.myInterval = setInterval(() => {
      const { seconds } = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1
        }));
      }
      if (seconds === 1) {
        this.setState(() => ({
          seconds: 4
        }));
      }
    }, 4000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  this.instructionChooser() {
    const { seconds } = this.state;
    if (seconds === 4) {
      return <h1>Breath in</h1>;
    } else if (seconds === 2) {
      return <h1>Breath out</h1>;
    } else {
      return <h1>Hold</h1>;
    }
  }

  render() {
    return <div className="Instructions">{this.instructionChooser} </div>;
  }
}
