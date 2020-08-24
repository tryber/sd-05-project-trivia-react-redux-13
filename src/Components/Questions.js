import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Questions extends Component {
  render() {
    return (
        <div className="question">
          <p data-testid="question-category"></p>
          <p data-testid="question-text">
            Pergunta
            </p>

        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Questions)
