var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import {SearchTodo} from 'SearchTodo';

describe('SearchTodo', () => {
  it ('should exist', () => {
    expect(SearchTodo).toExist();
  });

  it ('should dispatch setSearchText with input text', () => {
      var searchText = 'Dog';
      var spy = expect.createSpy();
      var searchTodo = TestUtils.renderIntoDocument(<SearchTodo dispatch={spy} />);

      searchTodo.refs.searchText.value = searchText;
      TestUtils.Simulate.change(searchTodo.refs.searchText);
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText
      }
      expect(spy).toHaveBeenCalledWith(action);
  });

  it ('should dispatch toggleShowCompleted with proper checked value', () => {
      var spy = expect.createSpy();
      var searchTodo = TestUtils.renderIntoDocument(<SearchTodo dispatch={spy} />);

      searchTodo.refs.showCompleted.checked = true;
      TestUtils.Simulate.change(searchTodo.refs.showCompleted);
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      }
      expect(spy).toHaveBeenCalledWith(action);
  });

});
