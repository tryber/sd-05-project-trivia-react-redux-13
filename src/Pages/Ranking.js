import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { cryptoEmail } from '../Components/Login';
// import { connect } from 'react-redux';

export default class Ranking extends Component {
  render() {
    const localState = JSON.parse(localStorage.getItem('state'));
    const ranking = localState.ranking.sort((a, b) => b.score - a.score);
    return (
      <div>
        <h1 data-testid="ranking-title">Ranking</h1>
        {ranking.map((player, index) => (
          <div>
            <img
              data-testid="header-profile-picture"
              src={`https://www.gravatar.com/avatar/${cryptoEmail}`}
              alt=""
            />
            <p data-testid={`player-name-${index}`}>Nome: {player.name}</p>
            <p data-testid={`player-score-${index}`}>Pontuação: {player.score}</p>
          </div>
        ))}
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
