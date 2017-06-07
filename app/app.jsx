var React = require('react');
var ReactDOM = require('react-dom');
var {IndexRoute, Route, Router, hashHistory, HashRouter} = require('react-router');
var Main = require('Main');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// Load css
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
      </Route>
    </Router>,
    document.getElementById('app')
);
