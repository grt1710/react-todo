var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {IndexRoute, Route, Router, hashHistory, HashRouter} = require('react-router');
var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

import './../playground/firebase/index';

store.subscribe(() => {
  console.log('state', store.getState());
});

// Load css
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Provider store={store}>
      <TodoApp />
    </Provider>,
    document.getElementById('app')
);
