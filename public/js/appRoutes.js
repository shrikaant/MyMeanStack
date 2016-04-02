var mainApp = angular.module("mainApp", ['ngRoute']);
mainApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.

    when('/nerds', {
        templateUrl: '/views/nerd.html',
        controller: 'AddStudentController'
    }).

    when('/geeks', {
        templateUrl: '/views/geek.html',
        controller: 'ViewStudentsController'
    }).

    otherwise({
        redirectTo: 'index.html'
    });
}]);