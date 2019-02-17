import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';
import TodoItem from "./TodoItem";

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
    const newItem = this.state.currentItem;
    if(newItem.text !== '') {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {text:'', key:''},
      });
    }
  }

  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => item.key !== key);
    this.setState({
      items: filteredItems,
    });
  }

  render() {
    return (
      <div className="App">
        <TodoList addItem={this.addItem} handleInput={this.handleInput}/>
        <TodoItem items={this.state.items} deleteItem={this.deleteItem}/>
      </div>
    );
  }
}

export default App;
