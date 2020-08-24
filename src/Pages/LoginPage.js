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
    return (
      <section>
        <Login />
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.triviaReducer.token,
});

const mapDispatchToProps = (dispatch) => ({
  fetchKey: (e) => dispatch(fetchToken(e)),
  fetchAPI: (e) => dispatch(fetchTrivia(e)),
});


LoginPage.propTypes = {
  fetchAPI: propTypes.func.isRequired,
  fetchKey: propTypes.func.isRequired,
  token: propTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
