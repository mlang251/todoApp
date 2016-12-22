import React from 'react';
import TodoApp from './TodoApp';

class TodoAppContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            todoItems: []
        };
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }
    addItem(newItem) {
        const todoItems = [
            ...this.state.todoItems,
            newItem
        ];
        this.setState({todoItems: todoItems});
    }

    removeItem(removeId) {
        const todoItems = this.state.todoItems.filter((currentItem, i) => {
            return currentItem.id !== removeId ? true : false;
        });
        this.setState({todoItems: todoItems});
    }

    render() {
        return (
            <TodoApp
                addItem = {this.addItem}
                removeItem = {this.removeItem}
                items = {this.state.todoItems}
            />
        );
    }
}

export default TodoAppContainer;
