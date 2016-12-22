import React from 'react';
import TodoItem from './TodoItem';

class TodoItemContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            checked: false
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        const checked = !this.state.checked;
        this.setState({
            checked: checked
        });
    }

    render() {
        return (
            <TodoItem
                item = {this.props.item}
                checked = {this.state.checked}
                removeItem = {this.props.removeItem}
                handleChange = {this.handleChange} />
        );
    }
}

export default TodoItemContainer;
