import React from 'react';
import Radium from 'radium';
import LabelInputContainer from './LabelInputContainer';

const NewItemForm = props => (
    <form>
        <LabelInputContainer id = "Name" type = "text" update = {props.update} />
        <LabelInputContainer id = "Location" type = "text" update = {props.update} />
        <LabelInputContainer id = "Date" type = "date" update = {props.update} />
        <LabelInputContainer id = "Time" type = "time" update = {props.update} />
        <LabelInputContainer id = "Description" type = "description" update = {props.update} />
        <button onClick = {props.handleClick}><label>Add Item</label></button>
    </form>
);

export default Radium(NewItemForm);
