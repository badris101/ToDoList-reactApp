import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
        <div className="Header box">
            <div className='menu-icon'>
                <a href=""><i className="fas fa-align-left"></i></a>
            </div>
            <div className='title'>
                <h1>{this.props.title}</h1>
            </div>
        </div>
        );
    }
}

export default Header;