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
  fetchToken: propType.shape(),
  fetchAPI: propType.shape(),
  token: propType.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
