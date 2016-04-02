angular.module('MainCtrl', []).controller('MainController', function($scope, $http) {
    $scope.formData = {};
    $scope.tagline = 'To the moon and back!';
    $http({ method: 'GET', url: '/api' }).
  success(function (data, status, headers, config) {
      // this callback will be called asynchronously
      // when the response is available.
      console.log('todos: ', data);
      $scope.tagline = data;
  }).
  error(function (data, status, headers, config) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      console.log('Oops and error', data);
  });

    $scope.createTodo = function () {
        $http.post('/api/todos', $scope.formData)
            .success(function (data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.message = data;
                console.log(data);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };

    //get specific user todos
    $http({ method: 'GET', url: '/api/todos/vandana' })
            .success(function(data) {
                $scope.tagline = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
});


