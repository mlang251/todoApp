import React from 'react';
import NewItemFormContainer from './NewItemFormContainer';
import Radium from 'radium';

const Sidebar = props => (
    <div id = "sidebar"
        className = {props.outerElementClassName}>
        <h2 className = "text-center">Add New Item</h2>
        <NewItemFormContainer
            submitForm = {props.submitForm} />
    </div>
);

Sidebar.propTypes = {
    submitForm: React.PropTypes.func.isRequired,
    outerElementClassName: React.PropTypes.string
};

Sidebar.defaultProps = {
    outerElementClassName: 'sidebar'
};

export default Radium(Sidebar);
