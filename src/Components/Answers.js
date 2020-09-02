import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { countScore } from '../redux/actions/usuarioActions';
import { status } from '../redux/actions/requestAPI';
import '../App.css';

export class Answers extends Component {
  constructor(props) {
    super(props);
    this.saveStorage = this.saveStorage.bind(this);
  }

  saveStorage() {
    const { name, gravatarEmail, score, assertions, Score } = this.props;
    Score(30);
    const newStorage = {
      player: {
        name,
        gravatarEmail,
        score: score + 30,
        assertions: assertions + 1,
      },
    };
    localStorage.setItem('state', JSON.stringify(newStorage));
  }

  render() {
    const { data, Change, borda, index, disabled, handleClick } = this.props;
    if (index === 5) {
      return <Redirect to="/feedback" />;
    }
    if (data.length > 0) {
      return (
        <div>
          <button
            disabled={disabled}
            onClick={() => {
              Change();
              handleClick();
              this.saveStorage();
            }}
            className={borda ? 'right' : null}
            data-testid="correct-answer"
          >
            {data[index].correct_answer}
          </button>
          {data[index].incorrect_answers.map((answer, i) => (
            <button
              disabled={disabled} onClick={() => { Change(); handleClick(); }}
              className={borda ? 'wrong' : null}
              data-testid={`wrong-answer-${i}`}
            >{answer}</button>
          ))}
        </div>
      );
    }
    return null;
  }
}

const mapStateToProps = (state) => ({
  name: state.usuarioReducer.name,
  gravatarEmail: state.usuarioReducer.email,
  score: state.usuarioReducer.score,
  assertions: state.usuarioReducer.assertions,
  data: state.triviaReducer.data,
  index: state.triviaReducer.index,
  borda: state.triviaReducer.status,
});

const mapDispatchToProps = {
  Score: countScore,
  Change: status,
};

Answers.propTypes = {
  name: propTypes.string.isRequired,
  gravatarEmail: propTypes.string.isRequired,
  score: propTypes.number.isRequired,
  assertions: propTypes.number.isRequired,
  index: propTypes.number.isRequired,
  Change: propTypes.func.isRequired,
  Score: propTypes.func.isRequired,
  borda: propTypes.bool.isRequired,
  data: propTypes.instanceOf(Array).isRequired,
  disabled: propTypes.bool.isRequired,
  handleClick: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Answers);
