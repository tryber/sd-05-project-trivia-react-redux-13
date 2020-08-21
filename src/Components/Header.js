import React, { Component } from 'react';
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

export default class Header extends Component {
  render() {
    return (
      <div>
        <p>Testando Header, apagar depois</p>
      </div>
    )
  }
}