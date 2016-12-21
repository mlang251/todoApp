import React from 'react';
import Radium from 'radium';

var styles = {
    div_todoItem: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#999',
        backgroundColor: '#ED0',
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
        color: '#55F',
        margin: 0,
        paddingBottom: 5,
        paddingRight: 5
    },
    Location: {
        fontSize: '1.6em',
        fontFamily: 'arial',
        display: 'inline-block',
        color: '#999',
        margin: 0,
        paddingBottom: 5
    },
    Date: {
        fontSize: '1.2em',
        fontFamily: 'arial',
        display: 'inline-block',
        color: '#BBB',
        margin: 0,
        paddingBottom: 5,
        paddingRight: 5
    },
    Time: {
        fontSize: '1.2em',
        fontFamily: 'arial',
        display: 'inline-block',
        color: '#BBB',
        margin: 0,
        paddingBottom: 5
    },
    Description: {
        fontSize: '1em',
        fontFamily: 'georgia',
        color: '#A33',
        margin: 0,
    }
}

class TodoItem extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(id) {
        this.props.removeItem(this.props.id);
    }

    render() {
        var nameLocation = [];
        var dateTime = [];
        var description;
        for (var prop in this.props.item) {
            var componentStyles = styles[prop];
            var paragraphElement = <p key = {prop} style = {componentStyles}>{this.props.item[prop]}</p>;

            prop == 'Name' || prop == 'Location' ? (
                nameLocation.push(paragraphElement)
            ) : prop == 'Date' || prop == 'Time' ? (
                dateTime.push(paragraphElement)
            ) : description = paragraphElement
        }
        return (
            <div id = "todoItem" style = {styles.div_todoItem}>
                <div id = "name-location">
                    {nameLocation}
                </div>
                <div id = "date-time">
                    {dateTime}
                </div>
                {description}
                <button onClick = {this.handleClick}>X</button>
            </div>
        );
    }
}

export default Radium(TodoItem);
