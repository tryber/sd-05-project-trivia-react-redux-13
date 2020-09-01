import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { name, cryptoEmail } = this.props;

    return (
      <div>
        <div>
          <img
            data-testid="header-profile-picture"
            src={`https://www.gravatar.com/avatar/${cryptoEmail}`}
            alt={`${name}`}
          />
        </div>
        <div>
          Jogador:
          <span data-testid="header-player-name">{name}</span>
        </div>
        <div>
          Pontos: <span data-testid="header-score">0</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.usuarioReducer.name,
  cryptoEmail: state.triviaReducer.hash,
})

export default connect(mapStateToProps)(Header);

// // import { fetchGravatar } from '../actions/requestGravatar.js';

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
