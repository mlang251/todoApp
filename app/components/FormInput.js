import React from 'react';
import Radium from 'radium';
import Datepicker from './Datepicker';

const FormInput = props => {
    const {field, type, todoItem, updateField, startDate} = props;
    const element = type === "date" ? (
        <Datepicker
            field = {field}
            startDate = {startDate}
            updateField = {props.updateField}
        />
    ) : type === "description" ? (
        <textarea
            rows = "5"
            id = "Description"
            value = {todoItem[field]}
            onChange = {updateField.bind(null, field, undefined)}
            style = {styles.textarea}>
        </textarea>
    ) : (
        <input
            type = {type}
            id = {field}
            value = {todoItem[field]}
            onChange = {updateField.bind(null, field, undefined)}>
        </input>
    )

    return (
        <div>
            <label
                htmlFor = {field}
                id = {field}
                style = {styles.label}>{field}</label>
            {element}
        </div>
    );
}

var styles = {
    label: {
        display: 'block'
    },
    textarea: {
        width: '100%'
    }
};

export default Radium(FormInput);
