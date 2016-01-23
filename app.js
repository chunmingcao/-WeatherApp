// MODULE
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

// ROUTES
weatherApp.config(function($routeProvider){
    
    $routeProvider
        
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })
    
    .when('/forecast', {
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'
    });
    
    
});

weatherApp.service('forecastService', function(){
    console.log('service');
    this.city = 'San Jose';
});


// CONTROLLERS
weatherApp.controller('homeController', ['$scope', 'forecastService', function($scope, forecastService){
    console.log('homeController');
    //console.log('forecastService.city:' + forecastService.city);
    $scope.city = forecastService.city;
    $scope.$watch('city', function(){
        forecastService.city = $scope.city;
    });
    //console.log('scope.city:' + $scope.city);
    
}]);

weatherApp.controller('forecastController', ['$scope', 'forecastService', function($scope, forecastService){
    
    console.log('2222forecastService.city:' + forecastService.city);
    $scope.city = forecastService.city;
    
}]);