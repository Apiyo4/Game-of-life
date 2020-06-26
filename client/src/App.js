import React, { Component } from 'react';
import './App.css';
import Grid from './Grid';
import Buttons from './Buttons';

const arrayClone= (arr)=>{
  return JSON.parse(JSON.stringify(arr))
}
class App extends Component {
  constructor() {
    super();
    this.rows = 25;
    this.columns = 25;
    this.state = {
      inputSpeed: "",
      isOpen : false,
      speed : 50,
      generation: 0,
      gridArray: Array(this.rows)
        .fill()
        .map(() => Array(this.columns).fill(false)),
      isPlaying: false,
    };
  }
  selectCell = (row, column) => {
    if (!this.state.isPlaying) {
      let gridArrayClone = arrayClone(this.state.gridArray);
      gridArrayClone[row][column] = !gridArrayClone[row][column];
      this.setState({
        gridArray: gridArrayClone,
      });
    }
  };
  randomRun = () => {
    let gridArrayClone = arrayClone(this.state.gridArray);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        if (Math.floor(Math.random() * 5) === 1) {
          gridArrayClone[i][j] = true;
        }
      }
    }
    this.setState({
      gridArray: gridArrayClone,
    });
  };
  startButton = () => {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(this.play, this.state.speed);
  };
  play = () => {
    this.setState({
      isPlaying: true,
    });
    let grid1 = this.state.gridArray;
    let grid2 = arrayClone(this.state.gridArray);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        let neighbors = 0;
        if (i > 0) if (grid1[i - 1][j]) neighbors++;
        if (i > 0 && j > 0) if (grid1[i - 1][j - 1]) neighbors++;
        if (i > 0 && j < this.columns - 1) if (grid1[i - 1][j + 1]) neighbors++;
        if (j < this.columns - 1) if (grid1[i][j + 1]) neighbors++;
        if (j > 0) if (grid1[i][j - 1]) neighbors++;
        if (i < this.rows - 1) if (grid1[i + 1][j]) neighbors++;
        if (i < this.rows - 1 && j > 0) if (grid1[i + 1][j - 1]) neighbors++;
        if (i < this.rows - 1 && j < this.columns - 1)
          if (grid1[i + 1][j + 1]) neighbors++;
        if (grid1[i][j] && (neighbors < 2 || neighbors > 3))
          grid2[i][j] = false;
        if (!grid1[i][j] && neighbors === 3) grid2[i][j] = true;
      }
    }
    this.setState({
      gridArray: grid2,
      generation: this.state.generation + 1,
    });
  };
  pauseButton = () => {
    this.setState({
      isPlaying: false,
    });
    clearInterval(this.intervalId);
  };
  stopButton = () => {
    this.setState({
      isPlaying: false,
    });
    clearInterval(this.intervalId);
    let gridArrayCopy = Array(this.rows)
      .fill()
      .map(() => Array(this.columns).fill(false));
    this.setState({
      gridArray: gridArrayCopy,
      generation: 0,
    });
  };
  randomButton = () => {
    this.randomRun();
    this.startButton();
  };
  onValueChange = (event) => {
    const { value } = event.target;
    this.setState({
      inputSpeed: value,
    });
  };
  changeSpeed = (event) =>{
      
    let newSpeed = parseInt(this.state.inputSpeed)
    console.log("speed", newSpeed);
    debugger
    
     this.setState({
       speed: newSpeed,
       inputSpeed: "",
       isOpen: false
     });
     console.log("speed", this.state.speed)
  }
  openInputForm = () =>{
    this.pauseButton();
    this.setState({
      isOpen : !this.state.isOpen
    })
  }
  componentDidMount() {
    this.randomRun();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Conway's Game of Life</h2>
        </header>
        <div className="App-flex">
          <div className="App-generation">
            <h2>Generation : {this.state.generation}</h2>
            <div className="flexSpace">
              <div>
                <Grid
                  gridArray={this.state.gridArray}
                  rows={this.rows}
                  columns={this.columns}
                  selectCell={this.selectCell}
                />
              </div>
              <div>
                <Buttons
                  startButton={this.startButton}
                  pauseButton={this.pauseButton}
                  stopButton={this.stopButton}
                  randomButton={this.randomButton}
                  changeSpeed={this.changeSpeed}
                  onValueChange={this.onValueChange}
                  inputSpeed={this.state.inputSpeed}
                  openInputForm={this.openInputForm}
                  isOpen={this.state.isOpen}
                  speed={this.state.speed}
                />
              </div>
            </div>
          </div>
          <div className="App-rules">
            <h2>Rules</h2>
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
        <div className="App-about" id={this.state.isOpen ? "removeMargin" : null}>
          <h2>About</h2>
          <p>
            The Game of Life is a two dimensional universe in which patterns
            evolve through time. It is one of the best examples in science of
            how a few simple rules can result in incredibly complex behaviour.
          </p>
          <p>
            It contains a square grid that holds cells that are either alive or
            dead. The behaviour of each cell is dependent only on the state of
            its eight immediate neighbours, according to the above rules.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
