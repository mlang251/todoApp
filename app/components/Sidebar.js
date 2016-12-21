import React from 'react';
import NewItemForm from './NewItemForm';
import Radium from 'radium';

class Sidebar extends React.Component {
    render() {
        return (
            <div id = "sidebar"
                className = {this.props.outerElementClassName}>
                <h2 className = "text-center">Add New Item</h2>
                <NewItemForm
                    addItem = {this.props.addItem} />
            </div>
        );
    }
}

export default Radium(Sidebar);
