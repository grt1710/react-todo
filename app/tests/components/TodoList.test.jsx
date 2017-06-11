var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoList = require('TodoList');
var Todo = require('Todo');


describe('TodoList', () => {
  it ('should exist', () => {
    expect(TodoList).toExist();
  });

  it ('should render one todo component for each todo item', () => {
    var todos = [
      {
        id: 1,
        text: 'Do something'
      },
      {
        id: 2,
        text: 'Do anything'
      }
    ];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
    var todoComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    expect(todoComponents.length).toBe(todos.length);
  });

  it ('should render empty message for no todo items', () => {
    var todos = [];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
    var $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.empty-todos').length).toBe(1);
  });

});
