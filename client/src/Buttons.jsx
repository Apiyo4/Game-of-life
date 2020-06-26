import React, { Component } from 'react';
import SpeedForm from './SpeedForm.jsx'
import { PlayCircleOutlined, PauseCircleOutlined, StopOutlined, SnippetsOutlined } from '@ant-design/icons';
class Buttons extends Component{
    render(){
        return(
            <div className =  "Buttons">
                <button className='start' onClick={this.props.startButton}>
                    <PlayCircleOutlined />
                        <span>Start</span>
                        
                        </button>
                
                <button className='pause' onClick={this.props.pauseButton}>
                    <PauseCircleOutlined />
                    <span>Pause</span></button>
                
                <button className='stop' onClick={this.props.stopButton}>
                    <StopOutlined />
                    <span>Stop</span>
                        </button>
                    <button className = 'random'onClick={this.props.randomButton}>
                    <SnippetsOutlined />
                    <span>Random</span>
                        </button>
                <p> Default speed is<strong> {this.props.speed}</strong> , want to change it,
                    <span onClick={this.props.openInputForm}> click here. </span></p>
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