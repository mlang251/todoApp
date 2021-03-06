import React from 'react';
import Radium from 'radium';

const formatTime = time => {
    let [hours, minutes] = time.split(':');
    const period = hours >= '12' ? "PM" : "AM"
    if (hours > '12') {
        hours -= '12'
    }
    else if (hours == '00') {
        hours = '12'
    }
    else if (hours < '10' && period == 'AM') {
        hours = hours[1];
    }
    return `${hours}:${minutes} ${period}`;
};

const generateTodoItem = item => {
    let nameLocation = [];
    let dateTime = [];
    let description;
    for (let prop in item) {
        const value = prop == "Time" ? formatTime(item[prop])
                                     : item[prop]
        const componentStyles = styles[prop];
        const paragraphElement = prop != "id" && <p key = {prop} style = {componentStyles}>{value}</p>;

        prop == 'Name' || prop == 'Location' ? (
            nameLocation.push(paragraphElement)
        ) : prop == 'Date' || prop == 'Time' ? (
            dateTime.push(paragraphElement)
        ) : description = paragraphElement
    }
    return [nameLocation, dateTime, description];
};

const itemStyling = checked => {
    let checkboxMessage;
    checked ? (
        Object.assign(styles.div_todoItem, {backgroundColor: '#1E8229'}),
        checkboxMessage = "Mark as incomplete"
    ) : (
        Object.assign(styles.div_todoItem, {backgroundColor: '#873842'}),
        checkboxMessage = "Mark as complete"
    )
    return checkboxMessage;
};

const TodoItem = props => {
    const {item, checked, removeItem, handleCheckboxChange} = props;
    const [nameLocation, dateTime, description] = generateTodoItem(item);
    const checkboxMessage = itemStyling(checked);

    return (
        <div id = "todoItem" style = {styles.div_todoItem}>
            <div id = "name-location">
                {nameLocation}
            </div>
            <div id = "date-time">
                {dateTime}
            </div>
            {description}
            <label style = {styles.checkboxLabel}>
                <input
                    type = "checkbox"
                    checked = {props.checked}
                    onChange = {props.handleCheckboxChange.bind(null, props.item.id, props.checked)}
                    style = {styles.checkbox}
                />{checkboxMessage}</label>
            <button onClick = {props.removeItem.bind(null, props.item.id, props.checked)}
                style = {styles.button}>X</button>
        </div>
    );
};

TodoItem.propTypes = {
    item: React.PropTypes.shape({
        Name: React.PropTypes.string,
        Location: React.PropTypes.string,
        Date: React.PropTypes.string,
        Time: React.PropTypes.string,
        Description: React.PropTypes.string,
        id: React.PropTypes.string
    }).isRequired,
    checked: React.PropTypes.bool.isRequired,
    removeItem: React.PropTypes.func.isRequired,
    handleCheckboxChange: React.PropTypes.func.isRequired
};

var styles = {
    div_todoItem: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#065478',
        padding: 15,
        marginBottom: 10,
        width: '100%',
        maxWidth: '30em',
        boxShadow: '0 3px 8px #333',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    Name: {
        fontSize: '2em',
        display: 'inline-block',
        color: '#FFFFDD',
        margin: 0,
        paddingRight: 5
    },
    Location: {
        fontSize: '1.6em',
        display: 'inline-block',
        color: '#DDDDBB',
        margin: 0,
    },
    Date: {
        fontSize: '1.2em',
        display: 'inline-block',
        color: '#FFFFDD',
        margin: 0,
        paddingBottom: 5,
        paddingRight: 5
    },
    Time: {
        fontSize: '1.2em',
        display: 'inline-block',
        color: '#DDDDBB',
        margin: 0,
        paddingBottom: 5
    },
    Description: {
        fontSize: '1em',
        color: '#FFFFDD',
        margin: 0,
    },
    checkboxLabel: {
        fontWeight: 'normal',
        marginBottom: 0
    },
    checkbox: {
        verticalAlign: 'middle'
    },
    button: {
        float: 'right'
    }
};

export default Radium(TodoItem);


