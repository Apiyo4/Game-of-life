import React, { Component } from 'react';
import SpeedForm from './SpeedForm.jsx'
class Buttons extends Component{
    render(){
        return(
            <div className =  "Buttons">
                    <button onClick={this.props.startButton}>Start</button>
                
                    <button onClick={this.props.pauseButton}>Pause</button>
                
                    <button onClick={this.props.stopButton}>Stop</button>
                    <button onClick={this.props.randomButton}>Random</button>
                    <p> Speed is {this.props.speed}</p>
                    <p onClick={this.props.openInputForm}> Too slow or Too fast</p>
                    {
                    this.props.isOpen ? <SpeedForm changeSpeed={this.props.changeSpeed}
                        onValueChange={this.props.onValueChange}
                        inputSpeed={this.props.inputSpeed} />: null
                    }
            </div>
        )
    }
}
export default Buttons