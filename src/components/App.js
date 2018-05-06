import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './quiz/QuestionList';
import Scorebox from './quiz/Scorebox';
import Results from './quiz/Results';
// Change the filename from this to your own
import MockData from '../mock_data/list2.json'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = MockData;
  }

  setCurrent(current) {
    this.setState({current})
  }

  setScore(score) {
    this.setState({score})
  }

  render() {
    if(this.state.current > this.state.questions.length) {
      return(
        <div className="container">
          <div className="row">
            <div className="col">
              <h2>Quiz App</h2>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p className="lead">Simple quiz app made with React</p>
            </div>
          </div>
          <hr />
          <div className="row mt-2">
            <div className="col">
              <Results {...this.state} />
            </div>
          </div>
        </div>
      )
    } else {
      return(
        <div className="container">
          <div className="row">
            <div className="col">
              <h2>Quiz App</h2>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p className="lead">Simple quiz app made with React</p>
            </div>
          </div>
          <hr />
          <div className="row mt-2">
            <div className="col">
              <Scorebox {...this.state} />
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <QuestionList {...this.state} 
                setCurrent={this.setCurrent.bind(this)}
                setScore={this.setScore.bind(this)} />
            </div>
          </div>
        </div>
      )
    }
  }
}

export default App;