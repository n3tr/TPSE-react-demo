var React = require('react');

var TodoListItem = React.createClass({

  render: function() {
    return (
      <li>{this.props.todo.text}</li>
    );
  }

});

module.exports = TodoListItem;
