import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({ seconds: prevState.seconds + 1 }));
    }, 1000);
  }

  // Commented to prevent cluttering in console
  // componentDidUpdate(prevProps, prevState) {
  //   // Called after every update.
  //   console.log(prevState);
  //   console.log(prevProps);
  //   console.log("Second changed!");
  // }

  componentWillUnmount() {
    // Do something
    clearInterval(this.intervalId);
  }

  render() {
    return <p>Seconds: {this.state.seconds}</p>;
  }
}

export default Timer;
