import React from 'react';
import TodoItem from './TodoItem';
import Radium from 'radium';

const ItemFeed = props => {
    let items = [];
    props.items.forEach((item, i) => {
        const id = `${item.Name}${i}`;
        items.push(<TodoItem item = {item} key = {id} id = {id} removeItem = {props.removeItem}/>);
    });

    return (
        <div id = "itemFeed"
            className = {props.outerElementClassName}>
            <h2 className = "text-center">Item Feed</h2>
            {items}
        </div>
    );
}

export default Radium(ItemFeed);
