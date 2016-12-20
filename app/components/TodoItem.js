import React from 'react';

class TodoItem extends React.Component {
    render() {
        return (
            <div>
                <h3>{this.props.item.name}<span> @ {this.props.item.location}</span></h3>
                <h4>{this.props.item.date} ~ {this.props.item.time}</h4>
                <p>{this.props.item.description}</p>
            </div>
        );
    }
}

export default TodoItem;
