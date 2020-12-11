import React from 'react';
import ReactDOM from 'react-dom';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ticking: false,
      seconds: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleClick() {
    if (this.state.ticking) {
      clearInterval(this.interval);
      this.setState({
        ticking: !this.state.ticking
      });
    } else {
      this.interval = setInterval(() => {
        this.setState({ seconds: this.state.seconds + 1 });
      }, 1000);
      this.setState({
        ticking: !this.state.ticking
      });
    }
  }

  handleReset() {
    if (this.state.ticking === false) {
      this.setState({
        seconds: 0
      });
    }
  }

  render() {
    let icon;
    if (this.state.ticking) {
      icon = 'fas fa-pause';
    } else {
      icon = 'fas fa-play';
    }
    return (
      <div className="row">
        <div className="watchFace" onClick={this.handleReset}>
          <span className="timer">{this.state.seconds}</span>
        </div>
        <i className={icon} onClick={this.handleClick}></i>
      </div>
    );
  }
}

ReactDOM.render(
  <Stopwatch />,
  document.querySelector('#root')
);
