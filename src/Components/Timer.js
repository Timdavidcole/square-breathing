import React from "react";
import "../Styles/Timer.css";

export default class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      seconds: 1,
      visible: false
    };

    this.timer = this.timer.bind(this);
    this.hide = this.hide.bind(this);
  }

  componentDidMount() {
    setTimeout(this.hide, 12000);
    setTimeout(this.timer, 12000);
  }

  hide() {
    this.setState({ visible: true });
  }

  timer() {
    setInterval(() => {
      const { seconds } = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds + 1
        }));
      }
      if (seconds === 4) {
        this.setState(() => ({
          seconds: 1
        }));
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  render() {
    const { seconds, visible } = this.state;
    if (visible) {
      return (
        <div className="timer">
          <h1>{seconds}</h1>
        </div>
      );
    } else return null
  }
}
