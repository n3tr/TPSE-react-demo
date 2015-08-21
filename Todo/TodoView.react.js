var React = require('react');
var TodoTextField = require('./TodoTextField.react');
var TodoList = require('./TodoList.react');

var createGUID = require('./Utils/guid').createGUID;

var TodoView = React.createClass({
  getInitialState: function() {
    return {
      todos: []
    };
  },

  addNewTodo: function(newTodo){
    var guid = createGUID();
    var todo = {
      id: guid,
      text: newTodo,
      timestamp: new Date().getTime()
    };

    var todos = this.state.todos.concat(todo);

    this.setState({
      todos: todos
    });
  },

  onSubmitTodo: function(newTodo){
    this.addNewTodo(newTodo);
  },


  render: function() {
    return (
      <div>
        <TodoTextField onSubmitTodo={this.onSubmitTodo}/>
        <TodoList todos={this.state.todos} />
      </div>
    );
  }

});

module.exports = TodoView;
