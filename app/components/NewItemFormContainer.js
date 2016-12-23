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
            },
            idIndex: 0
        };
        this.update = this.update.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.clearForm = this.clearForm.bind(this);
    }

    update(field, value) {
        let todoItem = {};
        for (let prop in this.state.todoItem) {
            prop != field ? todoItem[prop] = this.state.todoItem[prop]
                          : todoItem[prop] = value
        }
        this.setState({
            todoItem: todoItem
        });
    }

    clearForm() {
        let nextId = this.state.idIndex;
        nextId++;
        this.setState({
            todoItem: {
                Name: '',
                Location: '',
                Date: '',
                Time: '',
                Description: ''
            },
            idIndex: nextId
        });
    }

    handleClick() {
        let todoItem = {};
        todoItem.id = `${this.state.todoItem.Name}${this.state.idIndex}`;
        for (let prop in this.state.todoItem) {
            if (this.state.todoItem[prop] !== '') {
                todoItem[prop] = this.state.todoItem[prop];
            }
        }
        this.props.addItem(todoItem);
        this.clearForm();
    }

    render() {
        const formFields = {
            Name: "text",
            Location: "text",
            Date: "date",
            Time: "time",
            Description: "description"
        };

        return (
            <NewItemForm
                fields = {formFields}
                update = {this.update}
                handleClick = {this.handleClick}
            />
        );
    }
}

export default NewItemFormContainer;
