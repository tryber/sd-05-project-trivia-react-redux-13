import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../Components/Header';
import Questions from '../Components/Questions';
import Answers from '../Components/Answers';
import { question } from '../redux/actions/requestAPI';

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seconds: 30,
      status: false,
    };
    this.respondePergunta = this.respondePergunta.bind(this);
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.seconds > 0) {
        this.setState({
          seconds: this.state.seconds - 1,
        });
      } else {
        const timer = document.getElementById('timer');
        this.setState({
          status: true,
        });
        timer.style.color = 'tomato';
        timer.style.fontWeight = '700';
      }
    }, 1000);
  }

  respondePergunta() {
    this.setState({ status: true });
  }

  render() {
    const { pergunta } = this.props;
    const { status, seconds } = this.state;
    return (
      <div>
        <Header />
        <div>
          <Questions />
          <p id="timer">Tempo restante: {seconds} segundos</p>
        </div>
        <div>
          <Answers disabled={status} handleClick={this.respondePergunta} />
        </div>
        {status && (
          <button
            onClick={() => {
              pergunta();
              this.setState({ status: false });
            }}
            data-testid="btn-next"
          >Próxima pergunta</ button>
        )}
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

Game.propTypes = {
  pergunta: propTypes.func.isRequired,
};
export default connect(null, mapDispatchToProps)(Game);
