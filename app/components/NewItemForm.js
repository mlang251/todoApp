import React from 'react';
import Radium from 'radium';
import LabelInput from './LabelInput';

var styles = {
    textarea: {
        width: '100%'
    }
};

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
                name: '',
                location: '',
                date: '',
                time: '',
                description: ''
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
                <LabelInput id = "Name" type = "text" update = {this.update} />
                <LabelInput id = "Location" type = "text" update = {this.update} />
                <LabelInput id = "Date" type = "date" update = {this.update} />
                <LabelInput id = "Time" type = "time" update = {this.update} />
                <LabelInput id = "Description" type = "description" update = {this.update} />
                <button onClick = {this.handleClick}><label>Add Item</label></button>
            </form>
        );
    }
}

export default Radium(NewItemForm);
