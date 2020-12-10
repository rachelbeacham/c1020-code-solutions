import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isOn: !this.state.isOn
    });
  }

  render() {
    let backClass;
    let frontClass;
    let label;
    if (this.state.isOn) {
      backClass = 'backOn';
      frontClass = 'frontOn';
      label = 'ON';
    } else {
      backClass = 'backOff';
      frontClass = 'frontOff';
      label = 'OFF';
    }
    return (
      <div className="row">
        <div className="toggle" onClick={this.handleClick}>
          <div className={backClass}>
            <div className={frontClass}></div>
          </div>
        </div>
        <div className="label">{label}</div>
      </div>
    );
  }
}

export default ToggleSwitch;
