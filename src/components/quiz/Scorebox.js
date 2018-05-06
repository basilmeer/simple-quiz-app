import React, {Component} from 'react';

class Scorebox extends Component {
  render() {
    return(
      <div className="card text-white bg-info">
        <div className="card-body">
          Question {this.props.current} out of {this.props.questions.length} <span className="float-right"><strong>Score: {this.props.score}</strong></span>
        </div>
      </div>
    )
  }
}

export default Scorebox;