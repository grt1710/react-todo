var React = require('react');

var SearchTodo = React.createClass({
  handleSearch: function () {
    var searchText = this.refs.searchText.value;
    var showCompleted = this.refs.showCompleted.checked;

    this.props.onSearch(searchText,showCompleted);
  },
  render: function () {
    return (
      <div>
          <input type="text" ref="searchText" placeholder="Search for a todo" onChange={this.handleSearch} />
          <label>
            <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
            Show completed Todos
          </label>
      </div>
    );
  }
});

module.exports = SearchTodo;
