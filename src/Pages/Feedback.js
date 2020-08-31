import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { cryptoEmail } from '../Components/Login';
// import { connect } from 'react-redux';

function playerRankings(localState) {
  const newPlayer = {
    name: localState.player.name,
    score: localState.player.score,
    // picture: avatar,
  };

  if (!localStorage.getItem('ranking')) {
    localStorage.setItem('ranking', JSON.stringify([newPlayer]));
    return;
  }
  const rankings = [...JSON.parse(localStorage.getItem('ranking')), newPlayer];
  localStorage.setItem('ranking', JSON.stringify(rankings));
}

const buttonRanking = (localState) => (
  <button data-testid="btn-ranking" onClick={() => playerRankings(localState)}>
    Ver Ranking
  </button>
);

export default class Feedback extends Component {
  render() {
    const localState = JSON.parse(localStorage.getItem('state'));
    const { player } = localState;
    return (
      <div>
        <header>
          <img
            data-testid="header-profile-picture"
            src={`https://www.gravatar.com/avatar/${cryptoEmail}`}
            alt=""
          />
          <h2 data-testid="header-player-name">Jogador: {player.name}</h2>

          <h2 data-testid="header-score">Pontos: {player.score}</h2>
        </header>

        <p data-testid="feedback-text">
          {player.assertions >= 3 ? 'Mandou bem!' : 'Podia ser melhor...'}
        </p>
        <p data-testid="feedback-total-score">Pontuação final: {player.score}</p>
        <p data-testid="feedback-total-question">Perguntas acertadas:{player.assertions}</p>
        <Link to="/ranking">{buttonRanking(localState)}</Link>
        <Link to="/game">
          <button data-testid="btn-play-again">Jogar Novamente</button>
        </Link>
        {/* <Link to="/feedback">Feedback</Link> */}
      </div>
    );
  }
}

Feedback.propTypes = {
  totalQuestion: propTypes.number.isRequired,
  score: propTypes.number.isRequired,
};
