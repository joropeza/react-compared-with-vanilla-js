import React, { Component } from 'react';
import randomWord from 'random-words';

import NestedComponent from '../components/nestedComponent';

export default class ContainerWithState extends Component {
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
  	const { word } = this.state;
    return (
      <div>
		<div className="panel panel-default">
			<div className="panel-heading">
				Container / Component
			</div>
	  		<div className="panel-body">
	  			<NestedComponent word={word} handleButtonClick={this._handleButtonClick} />
	  		</div>
	  	</div>
      </div>
    );
  }
}
