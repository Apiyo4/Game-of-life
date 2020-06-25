import React, { Component } from 'react';

class Buttons extends Component{
    render(){
        return(
            <div className =  "Buttons">
                    <button onClick={this.props.startButton}>Start</button>
                
                    <button onClick={this.props.pauseButton}>Pause</button>
                
                    <button onClick={this.props.stopButton}>Stop</button>
            </div>
        )
    }
}
export default Buttons