import React, { Component } from 'react';
import { cryptoEmail } from '../Components/Login';

class Header extends Component {
  render() {
    const state = JSON.parse(localStorage.getItem('state'));
    return (
      <div>
        <div>
          <img
            data-testid="header-profile-picture"
            src={`https://www.gravatar.com/avatar/${cryptoEmail}`}
            alt=""
          />
        </div>

        <div data-testid="header-player-name">Jogador: {state.player.name}</div>

        <div data-testid="header-score">Pontos: {0}</div>
      </div>
    );
  }
}

export default Header;

// // import { fetchGravatar } from '../actions/requestGravatar.js';
// // import { connect } from 'react-redux';

// export default class Header extends Component {
//   componentDidMoutn() {
//     // const { fetchGravatar } = this.props;
//     // fetchGravatar();
//   }
//   render() {
//     // const { profilePicture } = this.props;
//     return <img src={`${profilePicture}`} alt="" />;
//   }
// }
// // const mapDispatchToProps = (dispatch) => ({
// //   fetchGravatar: (result) => dispatch(fetchGravatar(result)),
// // });
