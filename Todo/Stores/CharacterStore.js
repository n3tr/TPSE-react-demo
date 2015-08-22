var AppDispatcher = require('../AppDispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';


var _currentCount = 0;

function onAddTodo(todo) {
  // Do it in immutable

  _currentCount += todo.text.length;
}

var CharacterStore = assign({}, EventEmitter.prototype, {

  /**
   * Get the entire collection of TODOs.
   * @return {object}
   */
  getCount: function() {
    return _currentCount;
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
      var todo = action.todo;
      if (todo) {
        onAddTodo(todo);
        CharacterStore.emitChange();
      }
      break;

    default:
      break;
  }
});

module.exports = CharacterStore;
