import React from 'react';
import Radium from 'radium';
import LabelInputContainer from './LabelInputContainer';

const NewItemForm = props => {
    let inputs = [];
    for (let prop in props.fields) {
        inputs.push(
            <LabelInputContainer
                key = {prop}
                field = {prop}
                type = {props.fields[prop]}
                update = {props.update}
            />
        )
    }

    return (
        <form>
            {inputs}
            <button
                type = "button"
                id = "addItem"
                onClick = {props.handleClick}>
                <label htmlFor = "addItem">Add Item</label>
            </button>
        </form>
    );
};

export default Radium(NewItemForm);
