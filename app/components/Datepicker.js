import React from 'react';
import DatePicker from 'react-datepicker';

const Datepicker = props => (
    <DatePicker
        id = {props.id}
        selected = {props.selected}
        onChange = {props.selectDate}
        onBlur = {props.update.bind(null, props.id, props.stringDate)}
    />
);

export default Datepicker;
