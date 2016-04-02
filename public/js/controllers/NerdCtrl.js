angular.module('mainApp').controller('AddStudentController', ['$scope', 'todoFactory',
    function ($scope, todoFactory) {
        $scope.message = "This page will be used to display add student form";
        $scope.fetchToDo = function () {
            getCustomers();

        }

        $scope.saveToDo = function () {
            saveCustomers();
        }

        function getCustomers() {
            todoFactory.getCustomers()
                .success(function (response) {
                    $scope.customers = response[0].username + "-" + response[0].message;//JSON.parse(response);
                    
                })
                .error(function (error) {
                    $scope.status = 'Unable to load customer data: ' + error.message;
                });
        }

        function saveCustomers() {
            todoFactory.saveCustomers()
                .success(function (custs) {
                    $scope.customers = "data has been saved";
                })
                .error(function (error) {
                    $scope.status = 'Unable to load customer data: ' + error.message;
                });
        }
}]);