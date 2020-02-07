import React from "react";
import "../Styles/Instructions.css";

export default class Instructions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      seconds: 4
    };

    this.instructionChooser = this.instructionChooser.bind(this);
  }

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

  instructionChooser() {
    const { seconds } = this.state;
    if (seconds === 4) {
      return <h2>Breath in</h2>;
    } else if (seconds === 2) {
      return <h2>Breath out</h2>;
    } else {
      return <h2>Hold</h2>;
    }
  }

  render() {
    return <div className="instructions">{this.instructionChooser()} </div>;
  }
}
