import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

export class Answers extends Component {
  render() {
    const Change = () => {
      let right = document.getElementById('right');
      let wrong = document.querySelectorAll('#wrong');
      right.style.border = '3px solid rgb(6, 240, 15)';
      wrong.forEach((element) => (element.style.border = '3px solid rgb(255, 0, 0)'));
    };
    return (
      <div>
        <button onClick={Change} id="right" data-testid="correct-answer">
          {this.props.correctAnswer}
        </button>
        {this.props.incorrectAnswers.map((answer, index) => (
          <button onClick={Change} id="wrong" data-testid={`wrong-answer-${index}`}>
            {answer}
          </button>
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
  incorrectAnswers: propTypes.instanceOf(Array).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Answers);
