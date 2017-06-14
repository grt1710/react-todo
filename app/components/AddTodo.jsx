var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var todoText = this.refs.todoText.value;

    if (todoText.length > 0) {
      this.refs.todoText.value = '';
      // this.props.onAddTodo(todoText);
      dispatch(actions.startAddTodo(todoText));
      dispatch(actions.setSearchText(''));
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="todoText"  placeholder="What do you want to do?"/>
          <button className="button">Add</button>
        </form>
      </div>
    );
  }
});

export default connect()(AddTodo);
