import React, {Component} from 'react';

class Results extends Component {
  render() {
    var percent = (this.props.score / this.props.questions.length * 100);
    if(percent >= 80) {
      var message = 'Great job!';
    } else if(percent < 80 && percent > 60) {
      var message = 'You did okay.';
    } else {
      var message = 'You can do better than this.';
    }
    return(
      <div className="card">
        <div className="card-body text-center">
          <h4>You scored:</h4>
          <h3>{this.props.score} / {this.props.questions.length}</h3>
          <h4>{percent}% - {message}</h4>
          <hr />
          <a href="/build" className="card-link">Take Again</a>
        </div>
      </div>
    )
  }
}

export default Results;