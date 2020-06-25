import React, { Component } from 'react';
import Cell from './Cell';

class Grid extends Component{
    
    render(){
        const width = this.props.columns * 27;
        let rowsArray = [];
        let cell = "";
        let cellId ;
        for (let i = 0; i< this.props.rows; i++){
            for (let j = 0; j< this.props.columns; j++){
                cellId = i.toString() + "_" + j ;
                cell = this.props.gridArray[i][j] ? "cell isAlive" : "cell isDead"
                rowsArray.push(
                    <Cell cellId={cellId} cell={cell} row={i} column={j} key={cellId} selectCell={this.props.selectCell} />
                    
                )
            }
        }
        console.log(rowsArray)
        
        return(
            <div className='Grid' style={{width:width}}>{rowsArray}
            </div>
        )
    }
}
export default Grid;