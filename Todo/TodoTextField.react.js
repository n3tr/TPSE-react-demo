var React = require('react');

var TodoTextField = React.createClass({

  getInitialState: function() {
    return {
      textValue: ''
    };
  },

  onChange: function(e){
    var value = e.target.value;
    this.setState({
      textValue: value
    });
  },

  onClickAdd: function(e){
    e.preventDefault();
    if (this.state.textValue.length === 0) {
      return;
    }

    var value = this.state.textValue;
    this.setState({
      textValue: ''
    });

    this.props.onSubmitTodo(value);

  },

  render: function() {
    return (
      <div>
        <input type='text' onChange={this.onChange} value={this.state.textValue} />
        <input type='submit' onClick={this.onClickAdd} value='Add'/>

      </div>
    );
  }

});

module.exports = TodoTextField;
