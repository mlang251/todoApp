import React from 'react';
import Datepicker from './Datepicker';
import moment from 'moment';
require('react-datepicker/dist/react-datepicker.css');


class DatepickerContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            startDate: moment(),
            stringDate: ''
        };
        this.selectDate = this.selectDate.bind(this);
    }

    selectDate(date) {
        const stringDate = date.format('ddd MMM D, YYYY');

        this.setState({
            startDate: date,
            stringDate: stringDate
        });
    }

    render() {
        return (
            <Datepicker
                id = {this.props.id}
                selected = {this.state.startDate}
                stringDate = {this.state.stringDate}
                selectDate = {this.selectDate}
                update = {this.props.update}
            />
        );
    }
}

export default DatepickerContainer;
