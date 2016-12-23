import React from 'react';
import DatePicker from 'react-datepicker';
require('react-datepicker/dist/react-datepicker.css');

const Datepicker = props => (
    <DatePicker
        selected = {props.startDate}
        onChange = {props.updateField.bind(null, props.field)}
    />
);

export default Datepicker;
