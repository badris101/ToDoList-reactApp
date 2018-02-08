import React, { Component } from 'react';
import Header from './component/Header';
import Options from './component/Options';
import AddOption from './component/AddOption';
import Action from './component/Action';
import OptionModal from './component/OptionModal';
import './App.css';

class ToDoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      options : [],
      selectedTask : undefined
    }
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    this.handlePickOption = this.handlePickOption.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
  }

  handleAddOption(option){
    if(!option){
      return 'Enter valide value to add task';
    }else if(this.state.options.indexOf(option) > -1){
      return 'This Task already exists';
    }

    this.setState((prevState) => {
      return {
        options : prevState.options.concat(option)
      };
    })
  }

  handleRemoveAll(){
    this.setState({
      options : []
    })
  }

  handlePickOption(){
    const number = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[number];
    this.setState({
      selectedTask : option
    })
  }

  handleClose(){
    this.setState({
      selectedTask : undefined
    })
  }

  handleDeleteOption(optionToRemove){
    this.setState((prevState) => ({
      options : prevState.options.filter((option)=>{
        return optionToRemove !== option;
      })
    }))
  }

  render() {
    return (
      <div className="ToDoList">
        <div className='flex-container'>
          <Header title='ToDoList App' />
          <div className='card'>
            <Options options={this.state.options} handleDeleteOption={this.handleDeleteOption}/>
            <AddOption handleAddOption={this.handleAddOption}/>
            <Action hasOption={this.state.options.length > 0} handleRemoveAll={this.handleRemoveAll} handlePickOption={this.handlePickOption} />
          </div>
          <OptionModal selectedTask={this.state.selectedTask} handleClose={this.handleClose}/>
        </div>
      </div>
    );
  }
}

export default ToDoList;
