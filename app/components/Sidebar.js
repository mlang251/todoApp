import React from 'react';
import NewItemForm from './NewItemForm';
import Radium from 'radium';

var styles = {
    base: {
        display: "inline-block",
        padding: 15
    }
};

class Sidebar extends React.Component {
    render() {
        return (
            <div id = "sidebar" style = {styles.base}>
                <h2>Add New Item</h2>
                <NewItemForm
                    addItem = {this.props.addItem} />
            </div>
        );
    }
}

export default Radium(Sidebar);
