import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

class Questions extends Component {
  render() {
    const { data, index } = this.props;
    return (
      <div>
        <p data-testid="question-category">{data[index].category}</p>
        <p data-testid="question-text">{data[index].question}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.triviaReducer.data[0],
  index: state.triviaReducer.index,
});

const mapDispatchToProps = {};

Questions.propTypes = {
  data: propTypes.shape({
    player: {
      name: propTypes.string,
      assertions: propTypes.number,
      score: propTypes.number,
      gravatarEmail: propTypes.string,
    },
    ranking: [
      {
        name: propTypes.string,
        score: propTypes.number,
        picture: propTypes.string,
      },
      {
        name: propTypes.string,
        score: propTypes.number,
        picture: propTypes.string,
      },
    ],
    category: propTypes.string,
    question: propTypes.string,
    token: propTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
