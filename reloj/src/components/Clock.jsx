import { Component } from "react";

export class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }

  //Mediante esto hacemos que gire cada y se ejecute cada segundo, sino en cada recargada mostrar la posicion actual
  componentDidMount() {
    this.timeId = setInterval(() => {
      this.setState({
        time: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeId);
  }

  render() {
    return (
      <div className="clock">
        <div
          className="hand hour"
          data-hour-hand
          style={{
            transform: `rotateZ(${this.state.time.getHours() * 30}deg)`,
          }}
        ></div>
        <div
          className="hand minute"
          data-minute-hand
          style={{
            transform: `rotateZ(${this.state.time.getMinutes() * 6}deg)`,
          }}
        ></div>
        <div
          className="hand second"
          data-second-hand
          style={{
            transform: `rotateZ(${this.state.time.getSeconds() * 6}deg)`,
          }}
        ></div>
        <div className="number number1">1</div>
        <div className="number number2">2</div>
        <div className="number number3">3</div>
        <div className="number number4">4</div>
        <div className="number number5">5</div>
        <div className="number number6">6</div>
        <div className="number number7">7</div>
        <div className="number number8">8</div>
        <div className="number number9">9</div>
        <div className="number number10">10</div>
        <div className="number number11">11</div>
        <div className="number number12">12</div>
      </div>
    );
  }
}
