import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items : [],
      currentItem: {text:'', key:''},
    };
  }

  handleInput = e => {
    const itemText = e.target.value;
    const currentItem = {text: itemText, key: Date.now()};
    this.setState({
      currentItem,
    });
  }

  addItem = e => {
    e.preventDefault();
    const newItems = [...this.state.items, this.state.currentItem];
    this.setState({
      items: newItems,
      currentItem: {text:'', key:''},
    }, () => console.log(this.state));
  }

  render() {
    return (
      <div className="App">
        <TodoList addItem={this.addItem} handleInput={this.handleInput}/>
      </div>
    );
  }
}

export default App;
