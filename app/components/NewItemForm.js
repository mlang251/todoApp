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

NewItemForm.propTypes = {
    todoItem: React.PropTypes.shape({
        Name: React.PropTypes.string.isRequired,
        Location: React.PropTypes.string.isRequired,
        Date: React.PropTypes.string.isRequired,
        Time: React.PropTypes.string.isRequired,
        Description: React.PropTypes.string.isRequired
    }).isRequired,
    fields: React.PropTypes.object.isRequired,
    updateField: React.PropTypes.func.isRequired,
    submitForm: React.PropTypes.func.isRequired,
    startDate: React.PropTypes.object.isRequired
};

export default Radium(NewItemForm);
