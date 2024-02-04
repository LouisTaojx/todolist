import logo from './logo.svg';
import './App.css';
import React, { Component, Fragment }from 'react';
import TodoItem from './TodoItem';
import './index.css';

class Todolist extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    };
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handDelete = this.handDelete.bind(this);

  }
  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    });
    //this.state.list.push('hello world');
    //alert('hello');
  }
  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }
  handleItemClick(index) {
    //console.log(index);
    // const list = [...this.state.list];
    // list.splice(index, 1);
    // this.setState({
    //   list: list
    // });
  }
  handDelete(index) {
    console.log(index);
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list
    });
  }
  getTodoItem() {
    return(
      this.state.list.map((item, index) => {
        return (
          <TodoItem 
            delete={this.handDelete} 
            key ={index} content={item} 
            index={index}/>)
      }))
  }
  //父组件通过属性的形式向子组件传递参数
  //子组件通过props接受父组件传递过来的参数
  //子组件如果想和父组件通信，子组件需要调用父组件传递过来的方法
  render() {
    return (
      <Fragment>
        <div>
          <input value={this.state.inputValue} onChange = {this.handleInputChange}/>
          <button className='red-btn' onClick={this.handleBtnClick}>+</button>
        </div>
        <ul>{this.getTodoItem()} </ul>
      </Fragment>
    );
  }
}


export default Todolist;
