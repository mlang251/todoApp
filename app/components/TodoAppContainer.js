import React from 'react';
import TodoApp from './TodoApp';
import {StyleRoot} from 'radium';

class TodoAppContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            todoItems: [],
            completedItems: [],
            todoVisible: true
        };
        this.submitForm = this.submitForm.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.toggleItemFeed = this.toggleItemFeed.bind(this);
    }

    addItemToArray(item, newTodoItemBool) {
        const arrayName = newTodoItemBool ? "todoItems"
                                          : "completedItems"
        const newArray = [
            ...this.state[arrayName],
            item
        ];

        return newArray;
    }

    removeItemFromArray(removeId, checkedBool) {
        const arrayName = checkedBool ? "completedItems"
                                      : "todoItems"

        let removedItem = {};
        const newArray = this.state[arrayName].filter(currentItem => {
            let keepItem;
            currentItem.id !== removeId ? (
                keepItem = true
            ) : (
                Object.assign(removedItem, currentItem),
                keepItem = false
            )
            return keepItem;
        });

        return [newArray, removedItem];
    }

    submitForm(newItem) {
        const todoItems = this.addItemToArray(newItem, true);
        this.setState({todoItems: todoItems});
    }

    removeItem(removeId, checked) {
        const [newArray] = this.removeItemFromArray(removeId, checked);

        checked ? this.setState({completedItems: newArray})
                : this.setState({todoItems: newArray})
    }

    handleCheckboxChange(itemId, checked) {
        const [moveFromArrayName, moveToArrayName] = checked ? ["completedItems", "todoItems"]
                                                             : ["todoItems", "completedItems"]

        const [moveFromArray, itemToMove] = this.removeItemFromArray(itemId, checked);
        const moveToArray = this.addItemToArray(itemToMove, checked);
        const [todoItems, completedItems] = checked ? [moveToArray, moveFromArray]
                                                    : [moveFromArray, moveToArray]

        this.setState({
            todoItems: todoItems,
            completedItems: completedItems
        });
    }

    toggleItemFeed() {
        const todoVisible = !this.state.todoVisible;
        this.setState({
            todoVisible: todoVisible
        });
    }

    render() {
        return (
            <StyleRoot>
                <TodoApp
                    submitForm = {this.submitForm}
                    removeItem = {this.removeItem}
                    todoItems = {this.state.todoItems}
                    completedItems = {this.state.completedItems}
                    handleCheckboxChange = {this.handleCheckboxChange}
                    toggleItemFeed = {this.toggleItemFeed}
                    todoVisible = {this.state.todoVisible}
                />
            </StyleRoot>
        );
    }
}

export default TodoAppContainer;
