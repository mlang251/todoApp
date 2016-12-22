import React from 'react';
import NewItemFormContainer from './NewItemFormContainer';
import Radium from 'radium';

const Sidebar = props => (
    <div id = "sidebar"
        className = {props.outerElementClassName}>
        <h2 className = "text-center">Add New Item</h2>
        <NewItemFormContainer
            addItem = {props.addItem} />
    </div>
);

export default Radium(Sidebar);
