import React, { Component } from 'react';
import { fetchGravatar } from '../actions/requestGravatar.js';
import { connect } from 'react-redux';

class Header extends Component {
  componentDidMoutn() {
    const { fetchGravatar } = this.props;
    fetchGravatar();
  }
  render() {
    const { profilePicture } = this.props;
    return <img src={`${profilePicture}`} alt="" />;
  }
}

const mapStateToProps = (state) => ({
  profilePicture: state.gravatarReducer.profilePicture
});

const mapDispatchToProps = (dispatch) => ({
  fetchGravatar: (result) => dispatch(fetchGravatar(result)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
