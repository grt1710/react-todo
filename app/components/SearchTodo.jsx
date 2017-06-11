var React = require('react');

var SearchTodo = React.createClass({
  handleSearch: function () {
    var searchText = this.refs.searchText.value;
    var showCompleted = this.refs.showCompleted.checked;

    this.props.onSearch(searchText,showCompleted);
  },
  render: function () {
    return (
      <div className="search container">
        <div>
          <input type="text" ref="searchText" placeholder="Search for a todo" onChange={this.handleSearch} />
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" onChange={this.handleSearch} />
            Show completed Todos
          </label>
        </div>
      </div>
    );
  }
});

module.exports = SearchTodo;
