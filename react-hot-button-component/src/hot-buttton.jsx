import React from 'react';

let count = 0;

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    count++;
    this.setState({
      isClicked: count
    });
  }

  render() {
    const clicks = this.state.isClicked;
    if (clicks < 3) {
      return (
        <button className='one' onClick={this.handleClick}>Hot Button</button>
      );
    } else if (clicks >= 3 && clicks < 6) {
      return (
        <button className='two' onClick={this.handleClick}>Hot Button</button>
      );
    } else if (clicks >= 6 && clicks < 9) {
      return (
        <button className='three' onClick={this.handleClick}>Hot Button</button>
      );
    } else if (clicks >= 9 && clicks < 12) {
      return (
        <button className='four' onClick={this.handleClick}>Hot Button</button>
      );
    } else if (clicks >= 12 && clicks < 15) {
      return (
        <button className='five' onClick={this.handleClick}>Hot Button</button>
      );
    } else if (clicks >= 15) {
      return (
        <button className='six' onClick={this.handleClick}>Hot Button</button>
      );
    }
  }
}

export default HotButton;
