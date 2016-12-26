import React from 'react';
import Radium from 'radium';
import Datepicker from './Datepicker';

const generateElement = (field, type, todoItem, updateField, startDate) => {
    const element = ["date", "description"].indexOf(type) === -1 ? (
        <input
            type = {type}
            id = {field}
            value = {todoItem[field]}
            onChange = {updateField.bind(null, field, undefined)}>
        </input>
    ) : type === "date" ? (
        <Datepicker
            field = {field}
            startDate = {startDate}
            updateField = {updateField}
        />
    ) : (
        <textarea
            rows = "5"
            id = "Description"
            value = {todoItem[field]}
            onChange = {updateField.bind(null, field, undefined)}
            style = {styles.textarea}>
        </textarea>
    )
    return element;
};

const FormInput = props => {
    const {field, type, todoItem, updateField, startDate} = props;
    return (
        <div>
            <label
                htmlFor = {field}
                id = {field}
                style = {styles.label}>{field}</label>
            {generateElement(field, type, todoItem, updateField, startDate)}
        </div>
    );
};

FormInput.propTypes = {
    field: React.PropTypes.string.isRequired,
    type: React.PropTypes.string.isRequired,
    todoItem: React.PropTypes.shape({
        Name: React.PropTypes.string.isRequired,
        Location: React.PropTypes.string.isRequired,
        Date: React.PropTypes.string.isRequired,
        Time: React.PropTypes.string.isRequired,
        Description: React.PropTypes.string.isRequired
    }).isRequired,
    updateField: React.PropTypes.func.isRequired,
    startDate: React.PropTypes.object.isRequired
};

var styles = {
    label: {
        display: 'block'
    },
    textarea: {
        width: '100%',
        maxWidth: '30em'
    }
};

export default Radium(FormInput);
