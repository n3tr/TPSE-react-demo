var React = require('react');
var TodoView = require('./TodoView.react');

var TodoApp = React.createClass({

  render: function() {
    return (
      <div>
        <TodoView />
      </div>
    );
  }

});

module.exports = TodoApp;
