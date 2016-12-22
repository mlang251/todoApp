import React from 'react';
import Radium from 'radium';

const TodoItem = props => {
    let nameLocation = [];
    let dateTime = [];
    let description;
    for (let prop in props.item) {
        let componentStyles = styles[prop];
        let paragraphElement = <p key = {prop} style = {componentStyles}>{props.item[prop]}</p>;

        prop == 'Name' || prop == 'Location' ? (
            nameLocation.push(paragraphElement)
        ) : prop == 'Date' || prop == 'Time' ? (
            dateTime.push(paragraphElement)
        ) : description = paragraphElement
    }

    props.checked ? Object.assign(styles.div_todoItem, {backgroundColor: '#56F066'})
                  : Object.assign(styles.div_todoItem, {backgroundColor: '#4A4959'})

    return (
        <div id = "todoItem" style = {styles.div_todoItem}>
            <div id = "name-location">
                {nameLocation}
            </div>
            <div id = "date-time">
                {dateTime}
            </div>
            {description}
            <label><input type = "checkbox" checked = {props.checked} onChange = {props.handleChange}/>Mark as complete</label>
            <button onClick = {props.removeItem.bind(null, props.id)}
                style = {styles.button}>X</button>
        </div>
    );
}

var styles = {
    div_todoItem: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#999',
        padding: 15,
        marginBottom: 10,
        display: 'inline-block',
        width: 400,
        boxShadow: '0 3px 8px #333'
    },
    Name: {
        fontSize: '2em',
        fontFamily: 'arial',
        display: 'inline-block',
        color: '#3075BF',
        margin: 0,
        paddingBottom: 5,
        paddingRight: 5
    },
    Location: {
        fontSize: '1.6em',
        fontFamily: 'arial',
        display: 'inline-block',
        color: '#2965A6',
        margin: 0,
        paddingBottom: 5
    },
    Date: {
        fontSize: '1.2em',
        fontFamily: 'arial',
        display: 'inline-block',
        color: '#FC9866',
        margin: 0,
        paddingBottom: 5,
        paddingRight: 5
    },
    Time: {
        fontSize: '1.2em',
        fontFamily: 'arial',
        display: 'inline-block',
        color: '#B26B48',
        margin: 0,
        paddingBottom: 5
    },
    Description: {
        fontSize: '1em',
        fontFamily: 'georgia',
        color: '#E9B9A0',
        margin: 0,
    },
    button: {
        float: 'right'
    }
}

export default Radium(TodoItem);


