import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const MD5 = require('crypto-js/md5');

const email = [];
export const cryptoEmail = MD5(email).toString();

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      name: '',
      disabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.requests = this.requests.bind(this);
  }

  requests() {
    email.push(this.state.email);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });

    if (this.state.name && this.state.email) {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  }

  render() {
    return (
      <div>
        <Link to="/settings" data-testid="btn-settings">
          Settings
        </Link>
        <form>
          <label htmlFor="email">Email do Gravatar: </label>
          <input
            value={this.state.email}
            onChange={this.handleChange}
            type="email"
            id="email"
            data-testid="input-gravatar-email"
          />
          <label htmlFor="name">Nome do Jogador: </label>
          <input
            value={this.state.name}
            onChange={this.handleChange}
            type="text"
            id="name"
            data-testid="input-player-name"
          />
          <Link to="/game">
            <button data-testid="btn-play" disabled={this.state.disabled} onClick={this.requests}>
              JOGAR!
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default Login;