import React from 'react';
import { connet } from 'react-redux';
import PropTypes from 'prop-types';

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

const mapDispatchToProps = () => ({
 

})

export default connect (mapStateToProps, mapDispatchToProps)(Question);
