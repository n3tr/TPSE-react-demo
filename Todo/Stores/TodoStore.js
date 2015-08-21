var AppDispatcher = require('../AppDispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';


var _todos = [];

function addTodo(todo) {
  // Do it in immutable
  _todos = _todos.concat(todo);
}

var TodoStore = assign({}, EventEmitter.prototype, {

  /**
   * Get the entire collection of TODOs.
   * @return {object}
   */
  getAll: function() {
    return _todos;
  },

  // Listener Function
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function(action) {

  switch(action.actionType) {
    case 'CREATE_TODO':
      var text = action.todo;
      if (text !== '') {
        addTodo(text);
        TodoStore.emitChange();
      }
      break;

    default:
      break;
  }
});

module.exports = TodoStore;
