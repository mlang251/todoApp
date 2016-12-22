import React from 'react';
import NewItemForm from './NewItemForm';

class NewItemFormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoItem: {
                Name: '',
                Location: '',
                Date: '',
                Time: '',
                Description: ''
            }
        };
        this.update = this.update.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.clearForm = this.clearForm.bind(this);
    }

    update(id, value) {
        var todoItem = {};
        for (var prop in this.state.todoItem) {
            prop != id ? todoItem[prop] = this.state.todoItem[prop]
            : todoItem[prop] = value
        }
        this.setState({
            todoItem: todoItem
        });
    }

    clearForm() {
        this.setState({
            todoItem: {
                Name: '',
                Location: '',
                Date: '',
                Time: '',
                Description: ''
            }
        })
    }

    handleClick() {
        var todoItem = {};
        for (var prop in this.state.todoItem) {
            if (this.state.todoItem[prop] !== '') {
                todoItem[prop] = this.state.todoItem[prop];
            }
        }
        this.props.addItem(todoItem);
        this.clearForm();
    }

    render() {
        return (
            <NewItemForm
                update = {this.update}
                handleClick = {this.handleClick}
            />
        );
    }
}

export default NewItemFormContainer;
