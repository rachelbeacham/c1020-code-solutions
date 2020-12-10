import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    let colorClass;
    const clicks = this.state.isClicked;
    if (clicks < 3) {
      colorClass = 'one';
    } else if (clicks >= 3 && clicks < 6) {
      colorClass = 'two';
    } else if (clicks >= 6 && clicks < 9) {
      colorClass = 'three';
    } else if (clicks >= 9 && clicks < 12) {
      colorClass = 'four';
    } else if (clicks >= 12 && clicks < 15) {
      colorClass = 'five';
    } else if (clicks >= 15) {
      colorClass = 'six';
    }
    return (
      <button className={colorClass} onClick={this.handleClick}>Hot Button</button>
    );
  }
}

export default HotButton;
