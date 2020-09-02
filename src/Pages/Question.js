import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Timer from '../Components/Timer';

class Question extends React.Component {
  // state = {};

  componentDidMount() {}
  render() {
    const { perguntas } = this.props;
    return (
      <div>
        <Timer />
        <p data-testid="question-category">{perguntas}</p>
        <p data-testid="question-text">{perguntas}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  KEY: state.REDUCER,
});

export default connect(mapStateToProps)(Question);


Question.propTypes = {
  perguntas: propTypes.string.isRequired,
};
