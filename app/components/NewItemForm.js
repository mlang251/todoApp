import React from 'react';
import Radium from 'radium';
import DatePicker from 'react-datepicker';
import moment from 'moment';
require('react-datepicker/dist/react-datepicker.css');

var styles = {
    span: {
        display: 'block'
    }
};

class NewItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoItem: {
                name: '',
                location: '',
                date: '',
                time: '',
                description: ''
            },
            startDate: moment()
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    handleChange(e) {
        var todoItem = {};
        for (var prop in this.state.todoItem) {
            prop != e.target.id ? todoItem[prop] = this.state.todoItem[prop]
                                : todoItem[prop] = e.target.value
        }
        this.setState({
            todoItem: todoItem
        });
    }

    handleDateChange(date) {
        var stringDate = date.format('ddd MMM D, YYYY');
        var todoItem = this.state.todoItem;
        todoItem.date = stringDate;

        this.setState({
            todoItem: todoItem,
            startDate: date
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
                <div>
                    <label>Name
                        <input type = "text" required
                            id = "name"
                            value = {this.state.todoItem.name}
                            onChange = {this.handleChange}></input>
                    </label>
                </div>
                <div>
                    <label>Location
                        <input type = "text"
                            id = "location"
                            value = {this.state.todoItem.location}
                            onChange = {this.handleChange}></input>
                    </label>
                </div>
                <div>
                    <label>Date
                        <DatePicker
                            id = "date"
                            selected = {this.state.startDate}
                            onChange = {this.handleDateChange}/>
                    </label>
                </div>
                <div>
                    <label>Time
                        <input type = "time"
                            id = "time"
                            value = {this.state.todoItem.time}
                            onChange = {this.handleChange}></input>
                    </label>
                </div>
                <div>
                    <label><span style = {styles.span}>Description</span>
                        <textarea rows = "10"
                            id = "description"
                            value = {this.state.todoItem.description}
                            onChange = {this.handleChange}></textarea>
                    </label>
                </div>
                <div>
                    <button onClick = {this.handleClick}><label>Add Item</label></button>
                </div>
            </form>
        );
    }
}

export default Radium(NewItemForm);
