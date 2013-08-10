// app

function TodoCtrl($scope) {
  $scope.totalTodos = 4;
  $scope.todos = [
    {text: "watch first angular video", done: false},
    {text: "reproduce the code", done:false}
  ];
  $scope.addTodo = function() {
    $scope.todos.push({text: $scope.formTodoText, done: false});
    $scope.formTodoText = '';
  };
};
