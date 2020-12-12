import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    if (!this.state.isOpen) {
      return (
        <i className="fas fa-bars" onClick={this.handleClick}></i>
      );
    }
    return (
      <div className="row">
        <div className="menu">
          <h2>Menu</h2>
          <h4 onClick={this.handleClick}>About</h4>
          <h4 onClick={this.handleClick}>Get Started</h4>
          <h4 onClick={this.handleClick}>Sign In</h4>
        </div>
        <div className="dimmed" onClick={this.handleClick}></div>
      </div>
    );
  }
}

export default AppDrawer;
