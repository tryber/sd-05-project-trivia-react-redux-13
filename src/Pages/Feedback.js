import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import Header from '../Components/Header';

class Feedback extends Component {
  componentDidMount() {
    console.log(localStorage.getItem('ranking'));
    const { addPlayer } = this.props;
    if (!localStorage.getItem('ranking')) {
      localStorage.setItem('ranking', JSON.stringify([addPlayer]));
    } else {
      const rankings = [...JSON.parse(localStorage.getItem('ranking')), addPlayer];
      localStorage.setItem('ranking', JSON.stringify(rankings));
    }
  }

  render() {
    const { assertions, score } = this.props;
    return (
      <div>
        <Header />
        <p data-testid="feedback-text">{assertions >= 3 ? 'Mandou bem!' : 'Podia ser melhor...'}</p>
        <p data-testid="feedback-total-score">Pontuação final: {score}</p>
        <p data-testid="feedback-total-question">Perguntas acertadas:{assertions}</p>
        <Link to="/ranking">
          <button data-testid="btn-ranking">Ver Ranking</button>
        </Link>
        <Link to="/">
          <button data-testid="btn-play-again">Jogar Novamente</button>
        </Link>
        <Link to="/">
          <button>Voltar ao Início</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  addPlayer: state.usuarioReducer,
  assertions: state.usuarioReducer.assertions,
  score: state.usuarioReducer.score,
});

Feedback.propTypes = {
  assertions: propTypes.number.isRequired,
  addPlayer: propTypes.objectOf(propTypes.string.isRequired).isRequired,
  score: propTypes.number.isRequired,
};

export default connect(mapStateToProps)(Feedback);
