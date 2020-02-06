import React from "react";

export default class Timer extends React.Component {
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
      if (seconds === 0) {
        this.setState(() => ({
          seconds: 4
        }));
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  render() {
    const { seconds } = this.state;
    return (
      <div>
          <h1>{seconds}</h1>
      </div>
    );
  }
}
