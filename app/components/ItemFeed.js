import React from 'react';
import TodoItem from './TodoItem';
import Radium from 'radium';

const generateItems = (items, removeItem, checked, handleCheckboxChange) => {
    let itemsArray = [];
    items.forEach(item => {
        itemsArray.push(
            <TodoItem
                key = {item.id}
                item = {item}
                checked = {checked}
                removeItem = {removeItem}
                handleCheckboxChange = {handleCheckboxChange}
            />
        );
    });
    return itemsArray;
};

const ItemFeed = props => {
    const {heading, items, removeItem, checked, handleCheckboxChange, outerElementClassName} = props;
    return (
        <div
            className = {outerElementClassName}>
            <h2 className = "text-center">{heading}</h2>
            {generateItems(items, removeItem, checked, handleCheckboxChange)}
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
            Description: React.PropTypes.string,
            id: React.PropTypes.string
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
