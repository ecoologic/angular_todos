var app = angular.module('app', ['firebase'])
                 .controller('ApplicationController', function($scope, angularFire) {

  var url = 'https://angular-first.firebaseio.com/';
  angularFire(url, $scope, 'todos', []);

  $scope.todos = [
    {text: "watch first angular video", done: false},
    {text: "reproduce the code", done: false}
  ];

  $scope.getTotalTodos = function() {
    return $scope.todos.length;
  };

  $scope.add = function(newTodo) {
    $scope.todos.push({text: newTodo.text, done: false});
    $scope.formTodoText = '';
  };

  $scope.clearCompleted = function() {
    $scope.todos = _.filter($scope.todos, function(todo) {
      return !todo.done;
    });
  };
});
