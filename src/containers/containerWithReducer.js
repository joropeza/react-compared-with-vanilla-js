import React, { Component } from 'react';
import { connect } from 'react-redux';

import randomWord from 'random-words';

import NestedComponent from '../components/nestedComponent';
import * as wordActions from '../reducers/words';

class ContainerWithReducer extends Component {
  constructor(props) {
  	super(props);
  	this._handleButtonClick = this._handleButtonClick.bind(this);
  }
  _handleButtonClick() {
    const { dispatch } = this.props;
    dispatch(wordActions.wordsRequestAsync());
  }
  render() {
    const { words } = this.props;
    return (
      <div>
		<div className="panel panel-default">
			<div className="panel-heading">
				Container with Reducer State
			</div>
	  		<div className="panel-body">
	  			<NestedComponent word={words} handleButtonClick={this._handleButtonClick} />
	  		</div>
	  	</div>
      </div>
    );
  }
}

function mapState(state) {
  return {
    words: state.words
  };
}

export default connect(mapState)(ContainerWithReducer);
