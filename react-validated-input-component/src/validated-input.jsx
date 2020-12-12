import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      password: e.target.value
    });
  }

  validate() {
    const password = this.state.password;
    if (password === '') {
      this.message = 'A password is required.';
      this.icon = 'fas fa-times';
    } else if (password.length < 8) {
      this.message = 'Your password is too short.';
      this.icon = 'fas fa-times';
    } else {
      this.message = '';
      this.icon = 'fas fa-check';
    }
  }

  render() {
    this.validate();
    return (
      <form>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={this.state.password} onChange={this.handleChange} />
        <i className={this.icon}></i>
        <p className="error">{this.message}</p>
      </form>
    );
  }
}

export default ValidatedInput;
