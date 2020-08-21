import React, { Component } from 'react';
import Header from '../Components/Header';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';

export default class Feedback extends Component {
  constructor(props) {
    super(props);

    this.feedbackMessage = this.feedbackMessage.bind();
  }

  feedbackMessage() {
    if (this.props.totalQuestion >= 3) {
      return "Mandou bem!";
    }
      return "Podia ser melhor...";
  }

  render() {
    return (
      <div>
        <Header />
        <p data-testid="feedback-text">{this.feedbackMessage}</p>
        <p data-testid="feedback-total-score">Score: {this.props.score}</p>
        <p data-testid="feedback-total-question">Perguntas acertadas:{this.props.totalQuestion}</p>
        <Link to="/ranking">
          <button data-testid="btn-ranking">Ver Ranking</button>
        </Link>
        <Link to="/game">
          <button data-testid="btn-play-again">Jogar Novamente</button>
        </Link>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
