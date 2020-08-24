import React, { Component } from 'react';
import { fetchToken, fetchTrivia } from '../redux/actions/requestAPI';
import Login from '../Components/Login';
import { connect } from 'react-redux';

class LoginPage extends Component {
  componentDidMount() {
    const { fetchToken, fetchTrivia, token } = this.props;
    fetchToken();
    setTimeout(() => fetchTrivia(token), 2000)
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
  fetchTrivia: (e) => dispatch(fetchTrivia(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
