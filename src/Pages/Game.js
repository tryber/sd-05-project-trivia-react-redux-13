import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Timer from '../Components/Timer';
import Header from '../Components/Header';
// import { connect } from 'react-redux';

export default class Game extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <div className="question-timer">
          <p>
            Pergunta
          </p>
          <Timer />
        </div>
        <div className="alternatives">
          <button className="ans-btn">Alternativa 1</button>
          <button className="ans-btn">Alternativa 2</button>
        </div>
      </div>
    )
  }
}

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};
// export default connect(mapStateToProps, mapDispatchToProps)(Game);
