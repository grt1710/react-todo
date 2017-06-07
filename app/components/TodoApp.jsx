var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Clean the yard'
        },
        {
          id: 3,
          text: 'learn code'
        },
        {
          id: 4,
          text: 'learn design'
        }
      ]
    };
  },
  handleAddTodo: function(todoText) {
    console.log(todoText);
    alert('this todo will be added: ' + todoText);
  },
  render: function () {
    var {todos} = this.state;
    return (
      <div>
        <h1>Todo App</h1>
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    );
  }
});

module.exports = TodoApp;
