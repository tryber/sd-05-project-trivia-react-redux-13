import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchToken, fetchTrivia } from '../redux/actions/requestAPI';
import Login from '../Components/Login';
import propType from 'prop-types';

class LoginPage extends Component {
  componentDidMount() {
    const { fetchToken, fetchAPI, token } = this.props;
    fetchToken();
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
  fetchToken: (e) => dispatch(fetchToken(e)),
  fetchAPI: (e) => dispatch(fetchTrivia(e)),
});


LoginPage.propType = {
  fetchToken: propType.func.isRequired,
  fetchTrivia: propType.func.isRequired,
  token: propType.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
