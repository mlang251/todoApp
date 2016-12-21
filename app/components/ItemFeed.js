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
        this.props.items.forEach((item, i) => {
            var id = `${item.name}${i}`;
            items.push(<TodoItem item = {item} key = {id} />);
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
