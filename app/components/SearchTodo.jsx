var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');


export var SearchTodo = React.createClass({
  render: function () {
    var {dispatch, searchText, showCompleted} = this.props;
    return (
      <div className="search container">
        <div>
          <input type="text" ref="searchText" placeholder="Search for a todo" value={searchText} onChange={() => {
              var searchText = this.refs.searchText.value;
              dispatch(actions.setSearchText(searchText));
            }} />
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={() => {
                dispatch(actions.toggleShowCompleted());
              }} />
            Show completed Todos
          </label>
        </div>
      </div>
    );
  }
});

export default connect(
  (state) => {
    return {
      searchText: state.searchText,
      showCompleted: state.showCompleted
    };
  })(SearchTodo);
