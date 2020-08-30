import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Timer from '../Components/Timer';
// import { connect } from 'react-redux';
import Header from '../Components/Header';
import Questions from '../Components/Questions';
import Answers from '../Components/Answers';

class Game extends Component {
  render() {
    return (
      <div >
        <Header />
        <div>
          <Questions />
          <Timer />
        </div>
        <div>
          <Answers />
        </div>
        <Link to="/">
          <button>Voltar ao Início</button>
        </Link>
        {/* implementar contador para pegar perguntas pelo index */}
        <button data-testid="btn-next">Próxima pergunta</button>
        <Link to="/feedback">
          <button>Feedback</button>
        </Link>
        <Link to="/ranking">
          <button data-testid="btn-ranking">Ver Ranking</button>
        </Link>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};
export default Game;
