var React = require('react');
var uuid = require('node-uuid');

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import SearchTodo from 'SearchTodo';

//TodoApp
var TodoApp = React.createClass({
  render: function () {
    return (
      <div className="main-container">
        <h1 className="page-title">Todo App</h1>
        <SearchTodo />
        <TodoList />
        <AddTodo />
      </div>
    );
  }
});

module.exports = TodoApp;
