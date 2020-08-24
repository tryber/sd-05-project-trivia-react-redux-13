import React, { Component } from 'react';
import { cryptoEmail } from '../Components/Login';

class Header extends Component {
  render() {
    return (
      <div className="header" data-testid="header-player-name">
        <img src={`https://www.gravatar.com/avatar/${cryptoEmail}`} alt="" className="avt-img"/>
        <h2>Jogador: {this.props.name}</h2>

        <h2 data-testid="header-score">Pontos: {this.props.score}</h2>
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

// // // const mapStateToProps = (state) => ({
// // //   gravatarReducer: {
// // //     name: state.gravatarReducer.name,
// // //   }
// // // });

// // const mapDispatchToProps = (dispatch) => ({
// //   fetchGravatar: (result) => dispatch(fetchGravatar(result)),
// // });

// // export default connect(mapStateToProps, mapDispatchToProps)(Header);
