import React, { Component } from 'react';
import './App.css';
import Grid from './Grid';

class App extends Component {
  constructor(){
    super();
    this.speed = 50;
    this.rows = 25;
    this.columns = 25;
    this.state = {
      generation: 0,
      gridArray : Array(this.rows).fill().map(()=>Array(this.columns).fill(false))
    }
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h2>Conway's Game of Life</h2>
        </header>
        <div className="App-flex">
          <div className="App-generation">
            <h4>Generation : {this.state.generation}</h4>
            <Grid gridArray={this.state.gridArray} rows={this.state.rows} columns={this.state.columns}/>
          </div>
          <div className="App-rules">
            <h4>Rules</h4>
            <ul>
              <li>
                Any live cell with fewer than two live neighbours dies, as if by
                underpopulation.
              </li>
              <li>
                Any live cell with two or three live neighbours lives on to the
                next generation.
              </li>
              <li>
                Any live cell with more than three live neighbours dies, as if
                by overpopulation.
              </li>
              <li>
                Any dead cell with exactly three live neighbours becomes a live
                cell, as if by reproduction.
              </li>
            </ul>
          </div>
        </div>
        <div className="App-about">
          <h2>About</h2>
          <p>
            The Game of Life is a two dimensional universe in which patterns
            evolve through time. It is one of the best examples in science of
            how a few simple rules can result in incredibly complex behaviour.
          </p>
          <p>
            It contains a square grid that holds cells that are either alive or dead. The
            behaviour of each cell is dependent only on the state of its eight
            immediate neighbours, according to the above rules.
          </p>
        </div>
      </div>
    );
  }
  
}

export default App;
