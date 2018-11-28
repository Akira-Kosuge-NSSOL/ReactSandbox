import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddForm from './AddForm'
import CharacterList from './CharacterList'
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/**
 * Appコンポーネント
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <AddForm store={this.props.store} />
        <CharacterList store={this.props.store} />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>q
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
