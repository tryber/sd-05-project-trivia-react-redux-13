import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchToken, fetchTrivia } from '../redux/actions/requestAPI';
import Login from '../Components/Login';

class LoginPage extends Component {
  componentDidMount() {
    const { fetchKey, fetchAPI, token } = this.props;
    fetchKey();
    setTimeout(() => fetchAPI(token), 2000);
  }

  render() {
    if (!this.props.data) {
      return <div>Carregando...</div>;
    }
    return (
      <section>
        <Login />
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.triviaReducer.token,
  data: state.triviaReducer.data,
});

const mapDispatchToProps = (dispatch) => ({
  fetchKey: (e) => dispatch(fetchToken(e)),
  fetchAPI: (e) => dispatch(fetchTrivia(e)),
});


LoginPage.propTypes = {
  fetchAPI: propTypes.func.isRequired,
  fetchKey: propTypes.func.isRequired,
  token: propTypes.string.isRequired,
  data: propTypes.shape({
    player: {
      name: propTypes.string,
      assertions: propTypes.number,
      score: propTypes.number,
      gravatarEmail: propTypes.string,
    },
    ranking: [
      {
        name: propTypes.string,
        score: propTypes.number,
        picture: propTypes.string,
      },
      {
        name: propTypes.string,
        score: propTypes.number,
        picture: propTypes.string,
      },
    ],
    token: propTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
