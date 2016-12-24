import React from 'react';
import TodoItem from './TodoItem';
import Radium from 'radium';

const ItemFeed = props => {
    let items = [];
    props.items.forEach(item => {
        items.push(
            <TodoItem
                item = {item}
                key = {item.id}
                checked = {props.checked}
                removeItem = {props.removeItem}
                handleCheckboxChange = {props.handleCheckboxChange}
            />
        );
    });

    return (
        <div
            className = {props.outerElementClassName}>
            <h2 className = "text-center">{props.heading}</h2>
            {items}
        </div>
    );
}

export default Radium(ItemFeed);
