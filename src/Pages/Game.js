import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Timer from '../Components/Timer';
import { connect } from 'react-redux';
import Header from '../Components/Header';
import Questions from '../Components/Questions';
import Answers from '../Components/Answers';
import { question } from '../redux/actions/requestAPI';

class Game extends Component {
  render() {
    const { pergunta } = this.props;
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
        <button onClick={pergunta} data-testid="btn-next">Próxima pergunta</button>
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

const mapDispatchToProps = {
  pergunta: question,
};
export default connect(null, mapDispatchToProps)(Game);
