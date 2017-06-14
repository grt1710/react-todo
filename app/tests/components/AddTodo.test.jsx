var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
import * as actions from 'actions';
var {AddTodo} = require('AddTodo');

describe('AddTodo', () => {
  it ('should exist', () => {
    expect(AddTodo).toExist();
  });

  it ('should dispatch startAddTodo if valid text entered', () => {
      var todoText = 'check mail';
      var action = actions.startAddTodo(todoText);

      var spy = expect.createSpy();
      var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />);
      var $el = $(ReactDOM.findDOMNode(addTodo));

      addTodo.refs.todoText.value = todoText;
      TestUtils.Simulate.submit($el.find('form')[0]);

      expect(spy).toHaveBeenCalledWith(action);
  });

  it ('should not dispatch addTodo if invalid input', () => {
      var todoText = '';
      var spy = expect.createSpy();
      var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />);
      var $el = $(ReactDOM.findDOMNode(addTodo));

      addTodo.refs.todoText.value = todoText;
      TestUtils.Simulate.submit($el.find('form')[0]);

      expect(spy).toNotHaveBeenCalled();
  });

});
