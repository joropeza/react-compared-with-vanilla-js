import React, { Component } from 'react';

export default class NestedComponent extends Component {
  render() {
  	const { word, handleButtonClick } = this.props;
    return (
		<ul className="list-group">
		 	<li className="list-group-item"><span>{word}</span></li>
		 	<li className="list-group-item">
		 		<button id="wordButton" type="button" className="btn btn-primary" onClick={handleButtonClick}>
					Generate New Word
				</button>
			</li>
		</ul>
    );
  }
}
