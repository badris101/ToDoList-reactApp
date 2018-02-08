import React, { Component } from 'react';

class Action extends Component {
    render(){
        return (
            <div className='Action box'>
                <button className="Removebtn" onClick={this.props.handleRemoveAll} ><i className="fas fa-trash-alt"></i></button>
                <button className='Pickbtn' onClick={this.props.handlePickOption} disabled={this.props.hasOption ? false : true} ><i className="fas fa-crosshairs"></i></button>
            </div>
        );
    }
}

export default Action;