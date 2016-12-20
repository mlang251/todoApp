import React from 'react';
import TodoItem from './TodoItem';
import Radium from 'radium';

var styles = {
    base: {
        display: "inline-block",
        padding: 15
    }
};

class ItemFeed extends React.Component {
    render() {
        var items = [];
        this.props.items.forEach(item => {
            items.push(<TodoItem item = {item} key = {item.name} />);
        });

        return (
            <div id = "itemFeed" style = {styles.base}>
                <h2>Item Feed</h2>
                {items}
            </div>
        );
    }
}

export default Radium(ItemFeed);
