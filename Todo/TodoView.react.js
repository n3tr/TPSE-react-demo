var React = require('react');
var TodoTextField = require('./TodoTextField.react');
var TodoList = require('./TodoList.react');

var TodoStore = require('./Stores/TodoStore');
var TodoActions = require('./Actions/TodoActions');

var TodoView = React.createClass({
  getInitialState: function() {
    return {
      todos: TodoStore.getAll()
    };
  },

  componentDidMount: function() {
    TodoStore.addChangeListener(this.onChange);
  },

  componentWillUnmount: function() {
    TodoStore.moveChangeListener(this.onChange);
  },

  onChange:function(){
    this.setState({
      todos: TodoStore.getAll()
    })
  },

  addNewTodo: function(newTodo){
    // var guid = createGUID();
    // var todo = {
    //   id: guid,
    //   text: newTodo,
    //   timestamp: new Date().getTime()
    // };
    //
    // var todos = this.state.todos.concat(todo);
    //
    // this.setState({
    //   todos: todos
    // });
    //
    TodoActions.createTodo(newTodo);
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
