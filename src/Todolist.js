import logo from './logo.svg';
import './App.css';
import React from 'react';

class Todolist extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    };
    this.handleBtnClick = this.handleBtnClick.bind(this);
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
  render() {
    return (
      <div>
        <div>
          <input value={this.state.inputValue} onChange = {this.handleInputChange.bind(this)}/>
          <button onClick={this.handleBtnClick.bind(this)}>+</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return <li key={index}>{item}</li>
            })
          }
        </ul>
      </div>
    );
  }
}


export default Todolist;
