import React, { Component } from 'react';
// import { connect } from 'react-redux';

export default class Ranking extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className="main">
        <h1 data-testid="ranking-title">Ranking</h1>
      </div>
    )
  }
}

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(Ranking);
