angular.module('copyExample', [])

 .factory("UserService", function($scope) {

var calculateDistance = function(lat1, lon1, lat2, lon2) {
    var R = 6371; // km
    var dLat = (lat2-lat1).toRad();
    var dLon = (lon2-lon1).toRad();
  lat1 = lat1.toRad();
  lat2 = lat2.toRad();

    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c;
    return d;
};

})  // end UserService
 
 .controller('ExampleController', ['$scope',  function($scope) {

//  ** GeoLocation  Coords **  
//<br><br>
//<pre>GPS = {{GPSlat}}, {{GPSlon}}</pre>
//<br><br>

var GPSoptions = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function GPSsuccess(pos) {
  var crd = pos.coords;

  $scope.GPSlat = crd.latitude;
  $scope.GPSlon = crd.longitude;
  
} //  asdfjasdf

function GPSerror(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
} // asdfjadsf

navigator.geolocation.getCurrentPosition(GPSsuccess, GPSerror, GPSoptions);
        
   }])  // end ExampleController 

; // module copyExample
