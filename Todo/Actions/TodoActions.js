var AppDispatcher = require('../AppDispatcher/AppDispatcher');

function createTodo(text){

  var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  var todo = {
    id: id,
    complete: false,
    text: text
  };

  AppDispatcher.dispatch({
    actionType: 'CREATE_TODO',
    todo: todo
  });
}

exports.createTodo = createTodo;
