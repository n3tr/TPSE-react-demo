var React = require('react');
var TodoView = require('./TodoView.react');
var HistoryView = require('./HistoryView.react');
var BigCountView = require('./BigCountView.react');

var TodoApp = React.createClass({

  render: function() {
    return (
      <div>
        <TodoView />
        <HistoryView />
        <BigCountView />
      </div>
    );
  }

});

module.exports = TodoApp;
