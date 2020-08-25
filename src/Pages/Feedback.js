import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import Header from '../Components/Header';
// import { connect } from 'react-redux';

export default class Feedback extends Component {
  render() {
    const localState = JSON.parse(localStorage.getItem('state'));
    const { player } = localState;
    return (
      <div>
        <Header />
        <p data-testid="feedback-text">{
          (player.assertions >= 3) ? 'Mandou bem!' : 'Podia ser melhor...'
        }</p>
        <p data-testid="feedback-total-score">Pontuação final: {player.score}</p>
        <p data-testid="feedback-total-question">Perguntas acertadas:{player.assertions}</p>
        <Link to="/ranking">
          <button data-testid="btn-ranking">Ver Ranking</button>
        </Link>
        <Link to="/game">
          <button data-testid="btn-play-again">Jogar Novamente</button>
        </Link>
        <Link to="/feedback">
          Feedback
        </Link>
      </div>
    );
  }
}

Feedback.propTypes = {
  totalQuestion: propTypes.number.isRequired,
  score: propTypes.number.isRequired,
};

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};

