import React from 'react';
import ItemFeed from './ItemFeed';
import Sidebar from './Sidebar';

class TodoApp extends React.Component {
    constructor() {
        super();
        this.state = {
            todoItems: []
        };
    }
    addItem(newItem) {
        var todoItems = [
            ...this.state.todoItems,
            newItem
        ];
        this.setState({todoItems: todoItems});
    }

    removeItem(name) {
        var todoItems = this.state.todoItems.filter(currentItem => currentItem.name !== name)
        this.setState({todoItems});
    }

    render() {
        return (
            <div>
                <h1>My First Todo App</h1>
                <Sidebar
                    addItem = {this.addItem.bind(this)} />
                <ItemFeed
                    items = {this.state.todoItems}
                    removeItem = {this.removeItem.bind(this)} />
            </div>
        );
    }
}

export default TodoApp;
