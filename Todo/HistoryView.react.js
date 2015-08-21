var React = require('react');
var HistoryStore = require('./Stores/HistoryStore');
var HistoryView = React.createClass({

  getInitialState: function() {
    return {
      histories : HistoryStore.getAll()
    };
  },


  componentDidMount: function() {
    HistoryStore.addChangeListener(this.onChange);
  },

  componentWillUnmount: function() {
    HistoryStore.removeChangeListener(this.onChange);
  },

  onChange: function(){
    this.setState({
      histories: HistoryStore.getAll()
    })
  },

  render: function() {

    var historyItems = this.state.histories.map(function(history, i){
      return <li key={i}>{history}</li>
    });

    return (
      <div>
        <h1>Transaction</h1>
        <ul>
          {historyItems}
        </ul>
      </div>
    );
  }

});

module.exports = HistoryView;
