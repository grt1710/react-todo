var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var SearchTodo = require('SearchTodo');

describe('SearchTodo', () => {
  it ('should exist', () => {
    expect(SearchTodo).toExist();
  });

  it ('should call onSearch function with input text', () => {
      var searchText = 'Dog';
      var spy = expect.createSpy();
      var searchTodo = TestUtils.renderIntoDocument(<SearchTodo onSearch={spy} />);

      searchTodo.refs.searchText.value = searchText;
      TestUtils.Simulate.change(searchTodo.refs.searchText);

      expect(spy).toHaveBeenCalledWith('Dog',false);
  });

  it ('should call onSearch function with proper checked value', () => {
      var spy = expect.createSpy();
      var searchTodo = TestUtils.renderIntoDocument(<SearchTodo onSearch={spy} />);

      searchTodo.refs.showCompleted.checked = true;
      TestUtils.Simulate.change(searchTodo.refs.showCompleted);

      expect(spy).toHaveBeenCalledWith('',true);
  });

});
