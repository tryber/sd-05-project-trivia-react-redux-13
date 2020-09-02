import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { playAgain } from '../redux/actions/usuarioActions';

class Ranking extends Component {
  componentDidMount() {
  }
  render() {
    const localState = JSON.parse(localStorage.getItem('ranking'));
    const ranking = localState.length > 0 ? localState.sort((a, b) => b.score - a.score) : [];
    const { cryptoEmail, playAgain2 } = this.props;
    return (
      <div>
        <h1 data-testid="ranking-title">Ranking</h1>
        {ranking.map((player, index) => (
          <div>
            <img
              data-testid="header-profile-picture"
              src={`https://www.gravatar.com/avatar/${cryptoEmail}`}
              alt=""
            />
            <p data-testid={`player-name-${index}`}>Nome: {player.name}</p>
            <p data-testid={`player-score-${index}`}>Pontuação: {player.score}</p>
          </div>
        ))}
        <Link to="/">
          <button onClick={playAgain2()} data-testid="btn-go-home">Jogar Novamente</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cryptoEmail: state.triviaReducer.hash,
});

const mapDispatchToProps = (dispatch) => ({
  playAgain2: () => dispatch(playAgain()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Ranking);

Ranking.propTypes = {
  cryptoEmail: PropTypes.string.isRequired,
  playAgain2: PropTypes.func.isRequired,
};
