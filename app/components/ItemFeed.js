import React from 'react';
import TodoItem from './TodoItem';
import Radium from 'radium';

const ItemFeed = props => {
    let items = [];
    props.items.forEach(item => {
        items.push(
            <TodoItem
                key = {item.id}
                item = {item}
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

ItemFeed.propTypes = {
    heading: React.PropTypes.string,
    items: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            Name: React.PropTypes.string,
            Location: React.PropTypes.string,
            Date: React.PropTypes.string,
            Time: React.PropTypes.string,
            Description: React.PropTypes.string
        })
    ).isRequired,
    removeItem: React.PropTypes.func.isRequired,
    checked: React.PropTypes.bool.isRequired,
    outerElementClassName: React.PropTypes.string,
    handleCheckboxChange: React.PropTypes.func.isRequired
};

ItemFeed.defaultProps = {
    heading: 'Item Feed',
    outerElementClassName: 'itemFeed'
};

export default Radium(ItemFeed);
