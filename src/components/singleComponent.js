import React, { Component } from 'react';
import randomWord from 'random-words';

export default class App extends Component {
  constructor(props) {
  	super(props);
  	this.state = {word: 'Hello'};
  	this._handleButtonClick = this._handleButtonClick.bind(this);
  }
  _handleButtonClick() {
    let newRandomWord = randomWord();
    this.setState({word: newRandomWord});
  }
  render() {
    return (
      <div>
		<div className="panel panel-default">
			<div className="panel-heading">
				Single Component
			</div>
	  		<div className="panel-body">
	  			<div>
					<span>{this.state.word}</span>
	  			</div>
	  			<button id="wordButton" type="button" className="btn btn-primary" onClick={this._handleButtonClick}>
	  				Generate New Word
				</button>
	  		</div>
	  	</div>
      </div>
    );
  }
}
