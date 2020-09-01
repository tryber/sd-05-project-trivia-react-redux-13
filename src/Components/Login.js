import React, { Component } from 'react';
import propTypes from 'prop-types';
import CryptoJs from 'crypto-js';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { receivedToken, storeHash } from '../redux/actions/requestAPI';
import { addPlayer } from '../redux/actions/usuarioActions';
import getToken from '../services/requests';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
    };
  }

  hashGravatar() {
    const { email } = this.state;
    const { storeHashFunc } = this.props;
    const hash = CryptoJs.MD5(email).toString();
    storeHashFunc(hash);
  }

  saveStorage() {
    const { score, assertions } = this.props;
    const { name, email } = this.state;
    const newStorage = {
      name,
      gravatarEmail: email,
      score,
      assertions,
    };
    localStorage.setItem('state', JSON.stringify(newStorage));
  }

  clickPlay() {
    const { fetchKey, addPlayerInfo } = this.props;
    const { email, name } = this.state;
    console.log(email, name);
    addPlayerInfo(email, name);
    getToken().then((value) => {
      fetchKey(value);
      localStorage.setItem('token', value.token);
    });
    this.hashGravatar();
    this.saveStorage();
  }

  render() {
    return (
      <div>
        <Link to="/settings" data-testid="btn-settings">Settings</Link>
        <form>
          <label htmlFor="email">Email do Gravatar: </label>
          <input
            value={this.state.email}
            onChange={(event) => this.setState({ email: event.target.value })}
            type="email"
            data-testid="input-gravatar-email"
          />
          <label htmlFor="name">Nome do Jogador: </label>
          <input
            value={this.state.name}
            onChange={(event) => this.setState({ name: event.target.value })}
            type="text"
            data-testid="input-player-name"
          />
          <Link to="/game">
            <button
              data-testid="btn-play"
              disabled={!(this.state.email && this.state.name)}
              onClick={() => this.clickPlay()}
            >
              JOGAR!
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.usuarioReducer.name,
  gravatarEmail: state.usuarioReducer.email,
  score: state.usuarioReducer.score,
  assertions: state.usuarioReducer.assertions,
  token: state.triviaReducer.token,
});

const mapDispatchToProps = (dispatch) => ({
  fetchKey: (value) => dispatch(receivedToken(value.token)),
  addPlayerInfo: (name, email) => dispatch(addPlayer(name, email)),
  storeHashFunc: (hash) => dispatch(storeHash(hash)),
});

Login.propTypes = {
  score: propTypes.number.isRequired,
  assertions: propTypes.number.isRequired,
  addPlayerInfo: propTypes.func.isRequired,
  fetchKey: propTypes.func.isRequired,
  storeHashFunc: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
