import React from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';
require('react-datepicker/dist/react-datepicker.css');

class Datepicker extends React.Component {
    constructor() {
        super();
        this.state = {
            startDate: moment(),
            stringDate: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleChange(date) {
        var stringDate = date.format('ddd MMM D, YYYY');

        this.setState({
            startDate: date,
            stringDate: stringDate
        });
    }

    handleBlur() {
        this.props.update(this.props.id, this.state.stringDate);
    }

    render() {
        return (
            <DatePicker
                id = {this.props.id}
                selected = {this.state.startDate}
                onChange = {this.handleChange}
                onBlur = {this.handleBlur} />
        );
    }
}
