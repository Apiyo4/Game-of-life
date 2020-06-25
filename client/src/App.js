import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      generation: 0,
    }
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h2>John Cornway's Game of Life</h2>
        </header>
        <footer className="App-footer">
    <h4>Generation : {this.state.generation}</h4>
        </footer>
      </div>
    );
  }
  
}

export default App;
