import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { status } from '../redux/actions/requestAPI';
import '../App.css';

export class Answers extends Component {
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
            onClick={ () => { Change(); handleClick(); } }
            className={borda ? 'right' : null}
            data-testid="correct-answer"
          >
            {data[index].correct_answer}
          </button>
          {data[index].incorrect_answers.map((answer, i) => (
            <button
              disabled={disabled}
              onClick={ () => {Change(); handleClick(); } }
              className={borda ? 'wrong' : null}
              data-testid={`wrong-answer-${i}`}
            >
              {answer}
            </button>
          ))}
        </div>
      );
    }
    return null;
  }
}

const mapStateToProps = (state) => ({
  data: state.triviaReducer.data,
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
  disabled: propTypes.bool.isRequired,
  handleClick: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Answers);
