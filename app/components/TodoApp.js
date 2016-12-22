import React from 'react';
import ItemFeed from './ItemFeed';
import Sidebar from './Sidebar';

var outerElementClassName = {
    Sidebar: "col-sm-4",
    ItemFeed: "col-sm-8"
};

const TodoApp = props => (
    <div className = "row">
        <h1 className = "text-center">My First Todo App</h1>
        <Sidebar
            addItem = {props.addItem}
            outerElementClassName = {outerElementClassName.Sidebar} />
        <ItemFeed
            items = {props.items}
            removeItem = {props.removeItem}
            outerElementClassName = {outerElementClassName.ItemFeed} />
    </div>
);

export default TodoApp;
