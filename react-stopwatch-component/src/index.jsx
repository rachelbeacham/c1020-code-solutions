import React from 'react';
import ReactDOM from 'react-dom';

let interval;

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ticking: false };
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleClick() {
    if (this.state.ticking) {
      clearInterval(interval);
      this.setState({
        ticking: !this.state.ticking
      });
    } else {
      const $timer = document.querySelector('.timer');
      interval = setInterval(() => {
        $timer.textContent++;
      }, 1000);
      this.setState({
        ticking: !this.state.ticking
      });
    }
  }

  handleReset() {
    if (this.state.ticking === false) {
      const $timer = document.querySelector('.timer');
      $timer.textContent = 0;
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
          <span className="timer">0</span>
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
