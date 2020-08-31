import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import '../App.css';
import { status } from '../redux/actions/requestAPI';

export class Answers extends Component {
  render() {
    const { data, Change, borda, index } = this.props;

    return (
      <div>
        <button onClick={Change} className={borda ? 'right' : null} data-testid="correct-answer">
          {data[index].correct_answer}
        </button>
        {data[index].incorrect_answers.map((answer, i) => (
          <button
            onClick={Change}
            className={borda ? 'wrong' : null}
            data-testid={`wrong-answer-${i}`}
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
  borda: state.triviaReducer.status,
});

const mapDispatchToProps = {
  Change: status,
};

Answers.propTypes = {
  index: propTypes.number.isRequired,
  Change: propTypes.func.isRequired,
  borda: propTypes.bool.isRequired,
  data: propTypes.instanceOf(Array).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Answers);
