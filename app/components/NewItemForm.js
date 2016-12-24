import React from 'react';
import Radium from 'radium';
import FormInput from './FormInput';

const generateInputs = (todoItem, fields, updateField, startDate) => {
    let inputsArray = [];
    for (let prop in fields) {
        inputsArray.push(
            <FormInput
                key = {prop}
                field = {prop}
                type = {fields[prop]}
                todoItem = {todoItem}
                updateField = {updateField}
                startDate = {startDate}
            />
        )
    }
    return inputsArray;
};

const NewItemForm = props => {
    const {todoItem, fields, updateField, submitForm, startDate} = props;
    return (
        <form>
            {generateInputs(todoItem, fields, updateField, startDate)}
            <button
                type = "button"
                id = "addItem"
                onClick = {submitForm}>
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
