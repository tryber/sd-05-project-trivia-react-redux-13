import React, { Component } from 'react';
// import { connect } from 'react-redux';

export default class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seconds: 30,
    };
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.seconds > 0) {
        this.setState({
          seconds: this.state.seconds - 1,
        });
      }
      else {
        const timer = document.getElementById('timer');
        timer.style.color = 'tomato';
        timer.style.fontWeight = '700';
      }
    }, 1000);
  }

  render() {
    return (
      <div>
        <p id="timer">Tempo restante: {this.state.seconds} segundos</p>
      </div>
    );
  }

}

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(Timer);
