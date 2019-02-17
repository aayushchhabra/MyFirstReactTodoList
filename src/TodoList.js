import React from 'react';
import './TodoList.css';

class TodoList extends React.Component {
    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.props.addItem}>
                        <input placeholder="Task ... " onChange={this.props.handleInput}/>
                        <button type="submit">Add task</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default TodoList
