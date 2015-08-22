var React = require('react');
var TodoActions = require('./Actions/TodoActions');

var TodoListItem = React.createClass({

  onRemoveClick: function(e){
    e.preventDefault();
    TodoActions.removeTodo(this.props.todo);
  },

  render: function() {
    return (
      <li>
        {this.props.todo.text}
        <a href="#" onClick={this.onRemoveClick}>Remove</a>
      </li>
    );
  }

});

module.exports = TodoListItem;
