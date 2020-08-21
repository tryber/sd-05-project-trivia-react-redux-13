import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';

export default class Game extends Component {
  render() {
    return (
      <Link to="/feedback">Feedback</Link> // testando
    )
  }
}

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};
// export default connect(mapStateToProps, mapDispatchToProps)(Game);
