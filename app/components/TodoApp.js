import React from 'react';
import ItemFeed from './ItemFeed';
import Sidebar from './Sidebar';

const TodoApp = props => (
    <div className = "row">
        <h1 className = "text-center">My First Todo App</h1>
        <Sidebar
            submitForm = {props.submitForm}
            outerElementClassName = {outerElementClassName.Sidebar} />
        <ItemFeed
            heading = "Todo Items"
            items = {props.todoItems}
            removeItem = {props.removeItem}
            checked = {false}
            handleCheckboxChange = {props.handleCheckboxChange}
            outerElementClassName = {outerElementClassName.ItemFeed_todo} />
        <ItemFeed
            heading = "Completed Items"
            items = {props.completedItems}
            removeItem = {props.removeItem}
            checked = {true}
            handleCheckboxChange = {props.handleCheckboxChange}
            outerElementClassName = {outerElementClassName.ItemFeed_complete} />
    </div>
);

TodoApp.propTypes = {
    submitForm: React.PropTypes.func.isRequired,
    removeItem: React.PropTypes.func.isRequired,
    todoItems: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            Name: React.PropTypes.string,
            Location: React.PropTypes.string,
            Date: React.PropTypes.string,
            Time: React.PropTypes.string,
            Description: React.PropTypes.string,
            id: React.PropTypes.string
        })
    ).isRequired,
    completedItems: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            Name: React.PropTypes.string,
            Location: React.PropTypes.string,
            Date: React.PropTypes.string,
            Time: React.PropTypes.string,
            Description: React.PropTypes.string,
            id: React.PropTypes.string
        })
    ).isRequired,
    handleCheckboxChange: React.PropTypes.func.isRequired
};

var outerElementClassName = {
    Sidebar: "col-sm-4",
    ItemFeed_todo: "col-sm-4",
    ItemFeed_complete: "col-sm-4"
};

export default TodoApp;
