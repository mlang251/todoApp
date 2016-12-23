import React from 'react';
import moment from 'moment';
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
            startDate: moment(),
            idIndex: 0
        };
        this.updateField = this.updateField.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.clearForm = this.clearForm.bind(this);
    }

    updateField(field, date, e) {
        const [value, dateValue] = field !== "Date" ? [e.target.value, this.state.startDate]
                                                    : [date.format('ddd MMM D, YYYY'), date]

        let todoItem = {};
        for (let prop in this.state.todoItem) {
            prop != field ? todoItem[prop] = this.state.todoItem[prop]
                          : todoItem[prop] = value
        }
        this.setState({
            todoItem: todoItem,
            startDate: dateValue
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

    submitForm() {
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
                todoItem = {this.state.todoItem}
                fields = {formFields}
                updateField = {this.updateField}
                submitForm = {this.submitForm}
                startDate = {this.state.startDate}
            />
        );
    }
}

export default NewItemFormContainer;
