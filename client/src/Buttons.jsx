import React, { Component } from 'react';

class Buttons extends Component{
    render(){
        return(
            <div className =  "Buttons">
                <div className ="start">
                    <button onClick={this.props.startButton}>Start</button>
                </div>
                <div className="start">
                    <button onClick={this.props.startButton}>Start</button>
                </div>
                
            </div>
        )
    }
}
export default Buttons