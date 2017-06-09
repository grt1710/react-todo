var React = require('react');
var ReactDOM = require('react-dom');
var {IndexRoute, Route, Router, hashHistory, HashRouter} = require('react-router');
var TodoApp = require('TodoApp');

// Load css
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <TodoApp />,
    document.getElementById('app')
);
