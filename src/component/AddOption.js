import React, { Component } from 'react';

class AddOption extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            error : undefined
        }
    }

    handleSubmit(e){
        e.preventDefault();
        const option = e.target.option.value;
        const error = this.props.handleAddOption(option);
        this.setState({
            error //equal to error : error
        })
        e.target.option.value = '';
    }

    render(){
        return(
            <div className='AddOption box'>
                <form onSubmit={this.handleSubmit} >
                    <input type='text' name='option' placeholder='Add New Task ...'/>
                    <i className="fas fa-tasks"></i>
                </form>
                {this.state.error && <div className='ErrorMsg'>{this.state.error}</div>}
            </div>
        );
    }
}

export default AddOption;