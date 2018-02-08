import React, { Component } from 'react';

class Options extends Component {
    render(){
        return(
            <div className='Options box'>
                {this.props.options.length === 0 && <div className='Message'>No Items</div>}
                {this.props.options.map((option, index) =>
                    <div key={index} className='OptionTxt'>
                        <p>{option}</p>
                        <a onClick={(e)=>{
                            this.props.handleDeleteOption(option);
                        }}
                        >
                            <i className="far fa-trash-alt OptionIcon"></i>
                        </a>
                    </div>
                )}
            </div>
        );
    }
}

export default Options;