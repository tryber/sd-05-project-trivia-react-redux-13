import React, { Component } from 'react';
import propType from 'prop-types';
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


LoginPage.propType = {
  fetchAPI: propType.func.isRequired,
  fetchKey: propType.func.isRequired,
  token: propType.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
