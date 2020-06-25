import React, { Component } from 'react';

export default class SpeedForm extends Component {


    render() {
        return (
            <form>
                <input name='inputSpeed' placeholder='Enter new speed...' onChange={this.props.onValueChange} value={this.props.inputSpeed} />
                <br />
                <button onClick={this.props.changeSpeed}>Change Speed</button>

            </form>
        );
    }


} 