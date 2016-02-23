import React, { Component } from 'react';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import * as reducers from './reducers';

import SingleComponent from './components/singleComponent';
import ContainerWithState from './containers/containerWithState';
import ContainerWithReducer from './containers/containerWithReducer';

import WordsReducer from './reducers/words';

const reducer = combineReducers({
  words: WordsReducer
});

const store = compose(
	applyMiddleware(thunk))(createStore)(reducer);

export default class App extends Component {
  render() {
    return (
      <div>
        <SingleComponent />
        <ContainerWithState />
        <ContainerWithReducer store={store} />
      </div>
    );
  }
}
