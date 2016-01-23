// SERVICES
weatherApp.service('cityService', function(){
    console.log('service');
    this.city = 'San Jose';
});

weatherApp.service('weatherService', ['$resource', function($resource){
    this.getWeather = function(city, days, apikey){
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily",{callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});
        return weatherAPI.get({ q: city, cnt: days, appid: apikey });
    }
}]);