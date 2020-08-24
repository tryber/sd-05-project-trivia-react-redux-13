import React, { Component } from 'react';
// import { connect } from 'react-redux';

export default class Timer extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      seconds: 30,
    }
    }
  
  componentDidMount() {
    setInterval(() => {
      if (this.state.seconds > 0) {
        this.setState({
          seconds: this.state.seconds - 1
        })
      }
      else {
        document.getElementById("timer").style.color = "tomato";
      }
    }, 1000)
  }
  
    render() {
    return (
      <div>
        <p id="timer">Tempo: {this.state.seconds} segundos</p>
      </div>
    );
  }
 
}

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(Timer);
