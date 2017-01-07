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

const displayToggleMessage = checked => {
    const toggleMessage = checked ? "Show todo items"
                                  : "Show completed items"
    return toggleMessage;
};

const setDivStyles = (checked, todoVisible) => {
    styles.div.display = checked ? todoVisible ? "none"
                                               : "inline-block"
                                 : todoVisible ? "inline-block"
                                               : "none"
}

const ItemFeed = props => {
    const {heading, items, removeItem, checked, handleCheckboxChange,
        toggleItemFeed, outerElementClassName, todoVisible} = props;
    setDivStyles(checked, todoVisible);
    return (
        <div style = {styles.div}
            className = {outerElementClassName}>
            <h2 className = "text-center" style = {styles.h2}>{heading}</h2>
            <button
                className = "visible-sm visible-xs"
                type = "button"
                onClick = {toggleItemFeed.bind(null, checked)}
                style = {styles.button}>{displayToggleMessage(checked)}</button>
            {generateItems(items, removeItem, checked, handleCheckboxChange)}
        </div>
    );
};

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
    handleCheckboxChange: React.PropTypes.func.isRequired,
    toggleItemFeed: React.PropTypes.func.isRequired,
    outerElementClassName: React.PropTypes.string,
    todoVisible: React.PropTypes.bool.isRequired
};

ItemFeed.defaultProps = {
    heading: 'Item Feed',
    outerElementClassName: 'itemFeed'
};

let styles = {
    div: {
        '@media (min-width: 992px)': {
            display: 'inline-block'
        },
        '@media (max-width: 767px)': {
            width: '100%'
        }
    },
    button: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '15px'
    },
    h2: {
        color: "#DDDDBB"
    }
}

export default Radium(ItemFeed);
