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
    let message;
    let icon;
    const password = this.state.password;
    if (password === '') {
      message = 'A password is required.';
      icon = 'fas fa-times error';
    } else if (password.length < 8) {
      message = 'Your password is too short.';
      icon = 'fas fa-times error';
    } else {
      message = '';
      icon = 'fas fa-check good';
    }
    return ([icon, message]);
  }

  render() {
    const validated = this.validate();
    return (
      <form>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={this.state.password} onChange={this.handleChange} />
        <i className={validated[0]}></i>
        <p className="error">{validated[1]}</p>
      </form>
    );
  }
}

export default ValidatedInput;
