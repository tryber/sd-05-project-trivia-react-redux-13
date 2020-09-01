import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class Header extends Component {
  render() {
    const { name, cryptoEmail, score } = this.props;

    return (
      <div>
        <div>
          <img
            data-testid="header-profile-picture"
            src={`https://www.gravatar.com/avatar/${cryptoEmail}`}
            alt={`${name}`}
          />
        </div>
        <div>
          Jogador:
          <span data-testid="header-player-name">{name}</span>
        </div>
        <div>
          Pontos: <span data-testid="header-score">{score}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.usuarioReducer.name,
  score: state.usuarioReducer.score,
  cryptoEmail: state.triviaReducer.hash,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  name: propTypes.string.isRequired,
  cryptoEmail: propTypes.string.isRequired,
  score: propTypes.string.isRequired,
};
