angular.module('mainApp').factory('todoFactory', ['$http', function ($http) {

    var urlBase = '/nerds';
    var todoFactory = {};
    todoFactory.getCustomers = function (id) {
        var x= $http.get(urlBase, {
            params: {
                id: 'suchi'
            }
        });
        return x;
    };

    todoFactory.saveCustomers = function (id) {
        return $http.post(urlBase, {
            params: {
                name: "abc",
                usernam: "abcdef",
                message: "appointment with neha",
                status: true,
                created_at: Date("2015-10-28T04:00:00.000Z"),
                execute_at: Date("2015-10-29T04:00:00.000Z"),
                mobile: '8848929420',
                email: 'tyagi.vandana@gmai.com'
                
            }
        });
    };
    return todoFactory;
}]);