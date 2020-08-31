import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import '../App.css';
import { status } from '../redux/actions/requestAPI';

export class Answers extends Component {
  render() {
    const { data, Change, status, index } = this.props;

    return (
      <div>
        <button onClick={Change} className={status ? 'right' : null} data-testid="correct-answer">
          {data[index].correct_answer}
        </button>
        {data[index].incorrect_answers.map((answer, index) => (
          <button
            onClick={Change}
            className={status ? 'wrong' : null}
            data-testid={`wrong-answer-${index}`}
          >
            {answer}
          </button>
        ))}
        ;
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.triviaReducer.data[0],
  index: state.triviaReducer.index,
  status: state.triviaReducer.status,
});

const mapDispatchToProps = {
  Change: status,
};

Answers.propTypes = {
  correctAnswer: propTypes.string.isRequired,
  incorrectAnswers: propTypes.instanceOf(Array).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Answers);
