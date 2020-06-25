import React, { Component }  from 'react'


class Cell extends Component{
    selectCell = ()=>{
        this.props.selectCell(this.props.row, this.props.column)
    }
    render(){
        return(
            <div className ={this.props.cell}
            onClick= {this.selectCell}
            id = {this.props.cellId}
            />
        )
    }
};
export default Cell;