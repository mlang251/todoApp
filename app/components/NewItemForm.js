import React from 'react';
import Radium from 'radium';
import LabelInputContainer from './LabelInputContainer';

class NewItemForm extends React.Component {
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
            <form>
                <LabelInputContainer id = "Name" type = "text" update = {this.update} />
                <LabelInputContainer id = "Location" type = "text" update = {this.update} />
                <LabelInputContainer id = "Date" type = "date" update = {this.update} />
                <LabelInputContainer id = "Time" type = "time" update = {this.update} />
                <LabelInputContainer id = "Description" type = "description" update = {this.update} />
                <button onClick = {this.handleClick}><label>Add Item</label></button>
            </form>
        );
    }
}

export default Radium(NewItemForm);
