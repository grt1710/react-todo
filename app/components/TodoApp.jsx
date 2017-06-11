var React = require('react');
var uuid = require('node-uuid');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var SearchTodo = require('SearchTodo');
var TodoAPI = require('TodoAPI');
var moment = require('moment');

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
        {
          id: uuid(),
          text: todoText,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        },
        ...this.state.todos
      ]
    });
  },
  handleToggle: function(id) {
    var updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix() : undefined;
      }
      return todo;
    });

    this.setState({
      todos: updatedTodos
    });
  },
  render: function () {
    var {todos, showCompleted, searchText} = this.state;
    var filteredTodos = TodoAPI.filterTodos(todos, searchText, showCompleted);

    return (
      <div className="main-container">
        <h1 className="page-title">Todo App</h1>
        <SearchTodo onSearch={this.handleSearch} />
        <TodoList onToggle={this.handleToggle} todos={filteredTodos} />
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    );
  }
});

module.exports = TodoApp;
