import React from 'react';
import Radium from 'radium';

var styles = {
    div_todoItem: {
        border: 1,
        borderStyle: 'solid',
        borderColor: '#999',
        backgroundColor: '#ED0',
        padding: 15,
        marginBottom: 10,
        display: 'inline-block',
        width: 400,
    },
    name: {
        fontSize: '2em',
        fontFamily: 'arial',
        display: 'inline-block',
        color: '#55F',
        margin: 0,
        paddingBottom: 5,
        paddingRight: 5
    },
    location: {
        fontSize: '1.6em',
        fontFamily: 'arial',
        display: 'inline-block',
        color: '#999',
        margin: 0,
        paddingBottom: 5
    },
    date: {
        fontSize: '1.2em',
        fontFamily: 'arial',
        display: 'inline-block',
        color: '#BBB',
        margin: 0,
        paddingBottom: 5,
        paddingRight: 5
    },
    time: {
        fontSize: '1.2em',
        fontFamily: 'arial',
        display: 'inline-block',
        color: '#BBB',
        margin: 0,
        paddingBottom: 5
    },
    description: {
        fontSize: '1em',
        fontFamily: 'georgia',
        color: '#A33',
        margin: 0,
    }
}

class TodoItem extends React.Component {
    render() {
        var nameLocation = [];
        var dateTime = [];
        var description;
        for (var prop in this.props.item) {
            var componentStyles = styles[prop];
            prop == 'name' || prop == 'location' ? nameLocation.push(
                <p key = {prop} style = {componentStyles}>{this.props.item[prop]}</p>
            ) : prop == 'date' || prop == 'time' ? dateTime.push(
                <p key = {prop} style = {componentStyles}>{this.props.item[prop]}</p>
            ) : description = <p key = {prop} style = {componentStyles}>{this.props.item[prop]}</p>
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
            </div>
        );
    }
}

export default Radium(TodoItem);
