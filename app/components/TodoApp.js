import React from 'react';
import ItemFeed from './ItemFeed';
import Sidebar from './Sidebar';

var outerElementClassName = {
    Sidebar: "col-sm-4",
    ItemFeed: "col-sm-8"
};

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

    removeItem(removeId) {
        var todoItems = this.state.todoItems.filter((currentItem, i) => {
            var id = `${currentItem.name}${i}`;
            return id !== removeId ? true : false;
        });
        this.setState({todoItems: todoItems});
    }

    render() {
        return (
            <div className = "row">
                <h1 className = "text-center">My First Todo App</h1>
                <Sidebar
                    addItem = {this.addItem.bind(this)}
                    outerElementClassName = {outerElementClassName.Sidebar} />
                <ItemFeed
                    items = {this.state.todoItems}
                    removeItem = {this.removeItem.bind(this)}
                    outerElementClassName = {outerElementClassName.ItemFeed} />
            </div>
        );
    }
}

export default TodoApp;
