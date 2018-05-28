import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    counter: 1,
  };
  static propTypes = {
    name: PropTypes.string,
  };

  static defaultProps = {
    name: 'React',
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome {this.props.name}!</h1>
          <h2>{this.state.counter}</h2>
        </header>
        <p className="App-intro">
          <button onClick={() => this.setState((prevState) => ({ counter: prevState.counter + 1 }))}>+1</button>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
