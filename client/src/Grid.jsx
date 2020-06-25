import React, { Component } from 'react';
import Cell from './Cell';

class Grid extends Component{
    
    render(){
        const width = this.props.columns * 10;
        let rowsArray = [];
        let cell = "";
        let cellId ;
        for (let i = 0; i< this.props.rows; i++){
            for (let j = 0; j< this.props.cols; j++){
                cellId = i.toString() + j ;
                cell = this.props.gridArray[i][j] ? "cell isTrue" : "cell isFalse"
                rowsArray.push(
                    <Cell cellId = {cellId} cell={cell} row={i} column = {j}/>
                )
            }
        }
        return(
            <div className='Grid' style={{width:width}}>{rowsArray}</div>
        )
    }
}
export default Grid;