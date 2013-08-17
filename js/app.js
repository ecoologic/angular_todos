// app
var app = angular.module('app', []);

function ApplicationController($scope) {
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
};
