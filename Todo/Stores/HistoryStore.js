var AppDispatcher = require('../AppDispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';


var _histories = [];

function addCreateHistory(todo) {
  // Do it in immutable
  var history = "ADD: " + todo.text;
  _histories = _histories.concat(history);
}

function addRemoveHistory(todo) {
  var history = "REMOVE: " + todo.text;
  _histories = _histories.concat(history);
}

var HistoryStore = assign({}, EventEmitter.prototype, {

  /**
   * Get the entire collection of TODOs.
   * @return {object}
   */
  getAll: function() {
    return _histories;
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
  var todo;
  switch(action.actionType) {
    case 'CREATE_TODO':
      todo = action.todo;
      if (todo) {
        addCreateHistory(todo);
        HistoryStore.emitChange();
      }
      break;
    case 'REMOVE_TODO':
      todo = action.todo;
      if (todo) {
        addRemoveHistory(todo);
        HistoryStore.emitChange();
      }
      break;

    default:
      break;
  }
});

module.exports = HistoryStore;
