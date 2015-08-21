var React = require('react');
var TodoListItem = require('./TodoListItem.react');

var TodoList = React.createClass({

  render: function() {
    var todoItems = this.props.todos.map(function(todo, i){
      // return <li key={i}>{todo.text}</li>
      return <TodoListItem key={i} todo={todo}/>
    });

    return (
      <ul>
        {todoItems}
      </ul>
    );
  }

});

module.exports = TodoList;
