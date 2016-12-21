import React from 'react';
import TodoItem from './TodoItem';
import Radium from 'radium';

class ItemFeed extends React.Component {
    render() {
        var items = [];
        this.props.items.forEach((item, i) => {
            var id = `${item.Name}${i}`;
            items.push(<TodoItem item = {item} key = {id} id = {id} removeItem = {this.props.removeItem}/>);
        });

        return (
            <div id = "itemFeed"
                className = {this.props.outerElementClassName}>
                <h2 className = "text-center">Item Feed</h2>
                {items}
            </div>
        );
    }
}

export default Radium(ItemFeed);
