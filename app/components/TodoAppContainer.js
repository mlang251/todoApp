import React from 'react';
import TodoApp from './TodoApp';

class TodoAppContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            todoItems: [],
            completedItems: []
        };
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }

    addItem(newItem) {
        const todoItems = [
            ...this.state.todoItems,
            newItem
        ];
        this.setState({todoItems: todoItems});
    }

    removeItem(removeId) {
        let itemToRemove;
        const todoItems = this.state.todoItems.filter(currentItem => {
            return currentItem.id !== removeId ? true : false;
        });
        this.setState({todoItems: todoItems});
        return
    }

    handleCheckboxChange(itemId, checked) {
        const [moveFromArrayName, moveToArrayName] = checked ? ["completedItems", "todoItems"]
                                                             : ["todoItems", "completedItems"]
        let itemToMove = {};
        const moveFromArray = this.state[moveFromArrayName].filter(currentItem => {
            let keepItem;
            currentItem.id !== itemId ? (
                keepItem = true
            ) : (
                Object.assign(itemToMove, currentItem),
                keepItem = false
            )
            return keepItem;
        });

        const moveToArray = [
            ...this.state[moveToArrayName],
            itemToMove
        ];

        const [todoItems, completedItems] = checked ? [moveToArray, moveFromArray]
                                                    : [moveFromArray, moveToArray]

        this.setState({
            todoItems: todoItems,
            completedItems: completedItems
        });
    }

    render() {
        return (
            <TodoApp
                addItem = {this.addItem}
                removeItem = {this.removeItem}
                todoItems = {this.state.todoItems}
                completedItems = {this.state.completedItems}
                handleCheckboxChange = {this.handleCheckboxChange}
            />
        );
    }
}

export default TodoAppContainer;
