//main.js
(function() {
 //create module
var classApp = angular.module('weatherApp', []);


//create controller instantiate $scope and $http
classApp.controller('weatherCtrl', function($scope, $http){
 var vm = $scope;
 vm.appType = {
 heading:"Open Weather API App",
 subheading1:"Lab2: API calls using Restful Web Service",
 }

$http.get('http://ip-api.com/json').success(function(data){
vm.lat= data.lat;
vm.long= data.lon;
vm.cnt= data.cnt;
 var apiKey= 'c1b0f81eec3b02180a2361a25906aa6b';
 var openWeatherURL ='http://api.openweathermap.org/data/2.5/weather?lat=' +vm.lat+'&lon='+vm.lon+'&APPID=' +apiKey; 
});
  
 $http.get(openWeatherURL).success(function(data){
  vm.description= data.weather[0].description;
   vm.speed=(2.237*data.wind.speed).toFixed(1) + " mph";
   vm.name= data.name;
   vm.temp= data.main.temp;
   vm.ftemp= (vm.temp*(9/5)-459.67).toFixed(1) + " (°F)";
    vm.ctemp= (vm.temp-273).toFixed(1) + " (°C)";
   vm.icon= "http://openweathermap.org/img/w/" +
    data.weather[0].icon + ".png";
   switch(vm.description){
     case 'clear sky':{
       vm.weatherBackground= 
         {"background": "clearsky.jpg",
         "background-size": "cover"};
       break;
     }
    case 'broken clouds':{
       vm.weatherBackground= 
         {"background": "brokenclouds.jpg",
         "background-size": "cover"};
       break;
     }
   case 'few clouds':{
       vm.weatherBackground= 
         {"background": "fewclouds.jpg",
         "background-size": "cover"};
       break;
     }
  case 'mist':{
       vm.weatherBackground= 
         {"background": "mist.jpg",
         "background-size": "cover"};
       break;
     }
 case 'rain':{
       vm.weatherBackground= 
         {"background": "rain.jpg",
         "background-size": "cover"};
       break;
     }
 case 'rain showers':{
       vm.weatherBackground= 
         {"background": "rainshowers.jpg",
         "background-size": "cover"};
       break;
     }
 case 'scattered clouds':{
       vm.weatherBackground= 
         {"background": "scatteredclouds.jpg",
         "background-size": "cover"};
       break;
     }
 case 'thunderstorm':{
       vm.weatherBackground= 
         {"background": "thunderstorm.jpg",
         "background-size": "cover"};
       break;
     }
 case 'snow':{
       vm.weatherBackground= 
         {"background": "snow.jpg",
         "background-size": "cover"};
       break;
     }
 default:
       vm.weatherBackground= 
         {"background": "clearsky.jpg",
         "background-size": "cover"};
       break;
   }
   
});//End Controller
  
});//End App

 

                                            
                                       

 

                                            
                                       
