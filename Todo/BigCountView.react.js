var React = require('react');
var CharacterStore = require('./stores/CharacterStore');

var BigCountView = React.createClass({

  getInitialState: function() {
    return {
      count : CharacterStore.getCount()
    };
  },

  componentDidMount: function() {
    CharacterStore.addChangeListener(this.onChange);
  },

  componentWillUnmount: function() {
    CharacterStore.removeChangeListener(this.onChange);
  },

  onChange: function(){
    this.setState({
      count : CharacterStore.getCount()
    });
  },

  render: function() {
    return (
      <div>
        <h2>{this.state.count}</h2>
      </div>
    );
  }

});

module.exports = BigCountView;
