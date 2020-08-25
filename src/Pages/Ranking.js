import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';

export default class Ranking extends Component {
  render() {
    const localState = JSON.parse(localStorage.getItem('state'));
    return (
      <div>
        <h1 data-testid="ranking-title">Ranking</h1>
        {localState.ranking.map((player, index) => {
          return (
            <div>
              <p data-testid={`player-name-${index}`}>Nome: {player.name}</p>
              <p data-testid={`player-score-${index}`}>Pontuação: {player.score}</p>
            </div>
          );
        })}
        <Link to="/">
          <button data-testid="btn-go-home">Jogar Novamente</button>
        </Link>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(Ranking);
