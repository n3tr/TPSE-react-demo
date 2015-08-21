var React = require('react');
var TodoView = require('./TodoView.react');
var HistoryView = require('./HistoryView.react');

var TodoApp = React.createClass({

  render: function() {
    return (
      <div>
        <TodoView />
        <HistoryView />
      </div>
    );
  }

});

module.exports = TodoApp;
