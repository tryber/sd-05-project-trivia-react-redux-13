import React, { Component } from 'react';
import { fetchTrivia } from '../redux/actions/requestAPI';
import { connect } from 'react-redux';

class LoginPage extends Component {
  componentDidMount() {
    const { fetchTrivia } = this.props;
    fetchTrivia();
  }

  render() {
    return (
      <section>
        TESTE
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchTrivia: (e) => dispatch(fetchTrivia(e)),
});

export default connect(null, mapDispatchToProps)(LoginPage);