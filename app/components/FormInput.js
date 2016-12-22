import React from 'react';
import Radium from 'radium';
import DatepickerContainer from './DatepickerContainer';

const FormInput = props => {
    const {id, type, update, value, handleChange, handleBlur} = props;
    const element = type === "date" ? (
        <DatepickerContainer
            id = {id}
            update = {update}
        />
    ) : type === "description" ? (
        <textarea
            rows = "5"
            id = {id}
            value = {value}
            onChange = {handleChange}
            onBlur = {handleBlur}
            style = {styles.textarea}>
        </textarea>
    ) : (
        <input
            type = {type}
            id = {id}
            value = {value}
            onChange = {handleChange}
            onBlur = {handleBlur}>
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

var styles = {
    label: {
        display: 'block'
    },
    textarea: {
        width: '100%'
    }
};

export default Radium(FormInput);
