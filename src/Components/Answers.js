import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

export class Answers extends Component {
  render() {
    return (
      <div>
        <button data-testid="correct-answer">{this.props.correctAnswer}</button>
        {this.props.incorrectAnswers.map((answer, index) => (
          <button data-testid={`wrong-answer-${index}`}>{answer}</button>
        ))}
        ;
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  correctAnswer: state.triviaReducer.data[0][0].correct_answer,
  incorrectAnswers: state.triviaReducer.data[0][0].incorrect_answers,
});

const mapDispatchToProps = {};

Answers.propTypes = {
  correctAnswer: propTypes.string.isRequired,
  incorrectAnswers: propTypes.instanceOf(Array),
};

export default connect(mapStateToProps, mapDispatchToProps)(Answers);
