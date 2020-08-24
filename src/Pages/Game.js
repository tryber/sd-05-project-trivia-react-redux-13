import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Timer from '../Components/Timer';
import Header from '../Components/Header';
import Questions from '../Components/Questions'
// import { connect } from 'react-redux';

export default class Game extends Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate() {
    console.log(this.props)
  }
  render() {

    return (
      <div className="main">
        <Header />
        <div className="left">
          <Questions />
          <Timer />
        </div>
        <div className="alternatives">
          <button className="ans-btn" data-test-id="correct-answer">Resposta Certa</button>
          <button className="ans-btn" data-test-id="wrong-answer">Resposta Errada</button>
        </div>
        <div>
          <button>Voltar ao Início</button>
        </div>
      </div>
    )
  }
}

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};
// export default connect(mapStateToProps, mapDispatchToProps)(Game);
