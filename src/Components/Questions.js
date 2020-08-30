import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

class Questions extends Component {
  render() {
    return (
      <div>
        <p data-testid="question-category">
          {this.props.data.category}
        </p>
        <p data-testid="question-text">
          {this.props.data.question}
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.triviaReducer.data[0][0],
});

const mapDispatchToProps = {

};


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
    token: propTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
