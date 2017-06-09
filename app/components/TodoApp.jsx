var React = require('react');
var uuid = require('node-uuid');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var SearchTodo = require('SearchTodo');
var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    };
  },
  componentDidUpdate: function () {
    TodoAPI.setTodos(this.state.todos);
  },
  handleSearch: function(searchText, showCompleted) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  handleAddTodo: function(todoText) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: todoText,
          completed: false
        }
      ]
    });
  },
  handleToggle: function(id) {
    var updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    this.setState({
      todos: updatedTodos
    });
  },
  render: function () {
    var {todos} = this.state;
    return (
      <div>
        <h1>Todo App</h1>
        <SearchTodo onSearch={this.handleSearch} />
        <TodoList onToggle={this.handleToggle} todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    );
  }
});

module.exports = TodoApp;
