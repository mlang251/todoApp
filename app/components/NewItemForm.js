import React from 'react';
import Radium from 'radium';
import FormInput from './FormInput';

const NewItemForm = props => {
    let inputs = [];
    for (let prop in props.fields) {
        inputs.push(
            <FormInput
                key = {prop}
                field = {prop}
                type = {props.fields[prop]}
                todoItem = {props.todoItem}
                updateField = {props.updateField}
                startDate = {props.startDate}
            />
        )
    }

    return (
        <form>
            {inputs}
            <button
                type = "button"
                id = "addItem"
                onClick = {props.submitForm}>
                <label htmlFor = "addItem">Add Item</label>
            </button>
        </form>
    );
};

export default Radium(NewItemForm);
