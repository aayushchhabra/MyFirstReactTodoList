import React from 'react';
import './TodoItem.css';

class TodoItem extends React.Component {
    render() {
        const items = this.props.items.map(item =>
            <li className="todoItem" key={item.key} onClick={()=>this.props.deleteItem(item.key)}>
                {item.text}
            </li>)
        return (
            <ul className="theList">
                {items}
            </ul>
        );
    }
}

export default TodoItem
