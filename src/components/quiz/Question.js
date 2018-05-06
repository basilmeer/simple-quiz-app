import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Question extends Component {
  onChange(e) {
    e.preventDefault();
    const {setCurrent, setScore, question} = this.props;

    // Get the selected value
    let selected = e.target.value;

    // Check of the answer is right
    if(selected == question.correct) {
      setScore(this.props.score+1);
    }

    setCurrent(this.props.current+1);
  }
  render() {
    const {question} = this.props;
    return(
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">{question.text}</h5>
          <hr />
          <ul className="list-group">
            {
              this.props.question.choices.map(choice => {
                return(
                  <li className="list-group-item" key={choice.id}>
                    {choice.id} <input type="radio" onChange={this.onChange.bind(this)} name={question.id} value={choice.id} /> {choice.text}
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default Question;