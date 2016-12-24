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
            outerElementClassName = {outerElementClassName.ItemFeed_todo}
            handleCheckboxChange = {props.handleCheckboxChange} />
        <ItemFeed
            heading = "Completed Items"
            items = {props.completedItems}
            removeItem = {props.removeItem}
            checked = {true}
            outerElementClassName = {outerElementClassName.ItemFeed_complete}
            handleCheckboxChange = {props.handleCheckboxChange} />
    </div>
);

var outerElementClassName = {
    Sidebar: "col-sm-4",
    ItemFeed_todo: "col-sm-4",
    ItemFeed_complete: "col-sm-4"
};

export default TodoApp;
