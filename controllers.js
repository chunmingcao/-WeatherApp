// CONTROLLERS
weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService){
    console.log('homeController');
    //console.log('cityService.city:' + cityService.city);
    $scope.city = cityService.city;
    $scope.$watch('city', function(){
        cityService.city = $scope.city;
    });
    
    $scope.submit = function(){
        $location.path("/forecast");
    }
    //console.log('scope.city:' + $scope.city);
}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', 'weatherService', function($scope, $resource, $routeParams, cityService, weatherService){
    console.log('cityService.city:' + cityService.city);
    $scope.city = cityService.city;
    
    $scope.days = $routeParams.days || '2';

    $scope.weatherResult = weatherService.getWeather($scope.city, $scope.days, "44db6a862fba0b067b1930da0d769e98");
    $scope.convertToFahrenheit = function(degK){
        return Math.round((1.8 * (degK-273)) + 32);
    }
    $scope.convertToDate = function(dt){
        console.log(Date.now());
        console.log(dt);
        console.log(new Date(dt));
        return new Date(dt*1000);
    }

    console.log($scope.weatherResult);                                         
}]);


// API KEY: 4a2e26c0388d9a8e08ebc307a7813843