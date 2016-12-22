import React from 'react';
import Radium from 'radium';
import DatepickerContainer from './DatepickerContainer';

var styles = {
    label: {
        display: 'block'
    },
    textarea: {
        width: '100%'
    }
};

const LabelInput = props => {
    const {id, type} = props;
    const element = type === "date" ? (
        <DatepickerContainer
            id = "Date"
            update = {props.update}
        />
    ) : type === "description" ? (
        <textarea
            rows = "5"
            id = "Description"
            value = {props.value}
            onChange = {props.handleChange}
            onBlur = {props.handleBlur}
            style = {styles.textarea}>
        </textarea>
    ) : (
        <input
            type = {type}
            id = {id}
            value = {props.value}
            onChange = {props.handleChange}
            onBlur = {props.handleBlur}>
        </input>
    )

    return (
        <div>
            <label
                htmlFor = {id}
                id = {id}
                style = {styles.label}>{id}</label>
            {element}
        </div>
    );
}

export default Radium(LabelInput);
