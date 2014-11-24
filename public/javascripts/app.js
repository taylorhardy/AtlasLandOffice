var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/home', {
            templateUrl: 'partials/home.html'
        }).
        when('/aboutus', {
            templateUrl: 'partials/construction.html'
        }).
        when('/projects', {
            templateUrl: 'partials/construction.html'
        }).
        when('/location', {
            templateUrl: 'partials/construction.html'
        }).
        when('/contact', {
            templateUrl: 'partials/construction.html'
        }).
        otherwise({
            redirectTo: '/home'
        });

}]);

