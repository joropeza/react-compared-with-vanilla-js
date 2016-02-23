import React, { Component } from 'react';

import SingleComponent from './components/singleComponent';
import ContainerWithState from './containers/containerWithState';

export default class App extends Component {
  render() {
    return (
      <div>
        <SingleComponent />
        <ContainerWithState />
      </div>
    );
  }
}
