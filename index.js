import React, { Component } from 'react';
import { render } from 'react-dom';

import  Example from './navbar'
import './style.css';
import AppRouter from './route'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
      <Example />
      <AppRouter />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
