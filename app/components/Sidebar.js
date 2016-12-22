import React from 'react';
import NewItemFormContainer from './NewItemFormContainer';
import Radium from 'radium';

class Sidebar extends React.Component {
    render() {
        return (
            <div id = "sidebar"
                className = {this.props.outerElementClassName}>
                <h2 className = "text-center">Add New Item</h2>
                <NewItemFormContainer
                    addItem = {this.props.addItem} />
            </div>
        );
    }
}

export default Radium(Sidebar);
