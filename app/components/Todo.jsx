var React = require('react');
var {connect} = require('react-redux');

var moment = require('moment');
var actions = require('actions');

//Todo
export var Todo = React.createClass({
  render: function () {
    var {id, text, completed, createdAt, completedAt, dispatch} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';
    var renderDate = () => {
      var message = 'created ';
      var timestamp = createdAt;
      if (completed) {
        message = "completed ";
        timestamp = completedAt;
      }
      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };

    return (
      <div className={todoClassName} onClick={() => {
          // this.props.onToggle(id);
          dispatch(actions.toggleTodo(id));
        }}>
        <div>
          <input type="checkbox" refs="todoCheckbox" checked={completed} />
        </div>
        <div>
          <p>{text}</p>
          <p className="todo-time">{renderDate()}</p>
        </div>
      </div>
    );
  }
});

export default connect()(Todo);
