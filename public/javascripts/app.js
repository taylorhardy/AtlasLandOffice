var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/home', {
            templateUrl: 'partials/home.html'
        }).
        otherwise({
            redirectTo: '/home'
        });

}]);

