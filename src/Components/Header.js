import React, { Component } from 'react';
import { fetchGravatar } from '../actions/requestGravatar.js';
import { connect } from 'react-redux';

class Header extends Component {
  componentDidMoutn() {
    const { fetchGravatar } = this.props;
    fetchGravatar();
  }
  render() {
    const { profilePicture, name, score } = this.props.gravatarReducer;
    return <img src={`${profilePicture}`} />;
  }
}

const mapStateToProps = (state) => ({
  gravatarReducer:{
    name: state.gravatarReducer.name,
    score: state.gravatarReducer.score,
    profilePicture: state.gravatarReducer.profilePicture,
  }
});

const mapDispatchToProps = (dispatch) => ({
  fetchGravatar: (result) => dispatch(fetchGravatar(result)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

// A imagem do perfil vinda do Gravatar em um elemento que deve possuir o atributo data-testid com o valor header-profile-picture
// O nome da pessoa em um elemento que deve possuir o atributo data-testid com o valor header-player-name
// O placar zerado em um elemento que deve possuir o atributo data-testid com o valor header-score
